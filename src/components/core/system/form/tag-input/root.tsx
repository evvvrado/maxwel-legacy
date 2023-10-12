import React from "react";

import { cn } from "@/app/styles/mixins";

interface TagInputContext {
	id: string;
	tagList: string[];
	insertTag: () => void;
	removeTag: (tag: string) => void;
	typingTag: string | undefined;
	setTypingTag: (tag: string) => void;
	errorMessage: string;
}

const RootContext = React.createContext({} as TagInputContext);

const Root: React.FC<
	React.HTMLAttributes<HTMLDivElement> & { maxInputs: number }
> = ({ id, maxInputs, ...props }) => {
	const customId = React.useId();

	const [typingTag, setTypingTag] = React.useState<string>("");
	const [tagList, setTagList] = React.useState<string[]>([]);

	const [errorMessage, setErrorMessage] = React.useState<string>("");

	const insertTag = () => {
		if (!typingTag) {
			return setErrorMessage("Please enter a value.");
		}

		if (tagList.includes(typingTag)) {
			return setErrorMessage("This input is already added.");
		}

		if (tagList.length >= maxInputs) {
			return setErrorMessage("Maximum input size reached.");
		}

		setTagList([...tagList, typingTag]);
		setTypingTag("");
		setErrorMessage("");
	};

	const removeTag = (tag: string) => {
		if (!tag) return;

		setTagList([...tagList.filter((listItem) => listItem != tag)]);
	};

	const value = {
		id: id || customId,
		tagList,
		insertTag,
		removeTag,
		typingTag,
		setTypingTag,
		errorMessage,
	};
	return (
		<RootContext.Provider value={value}>
			<div className={cn(props.className, "")} {...props} />
		</RootContext.Provider>
	);
};

export const useTagInput = () => React.useContext(RootContext);

export default Root;
