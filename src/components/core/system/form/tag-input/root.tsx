import React from "react";

import { cn } from "@/app/styles/mixins";

interface TagInputContext {
	id: string;
	list: string[];
	insertTag: () => void;
	removeTag: (tag: string) => void;
	typingTag: string | undefined;
	setTypingTag: (tag: string) => void;
	errorMessage: string;
}

const RootContext = React.createContext({} as TagInputContext);

const Root: React.FC<
	React.HTMLAttributes<HTMLDivElement> & {
		maxInputs: number;
		list: string[];
		setList: (list: string[]) => void;
	}
> = ({ id, maxInputs, list, setList, ...props }) => {
	const customId = React.useId();

	const [typingTag, setTypingTag] = React.useState<string>("");

	const [errorMessage, setErrorMessage] = React.useState<string>("");

	const insertTag = () => {
		if (!typingTag) {
			return setErrorMessage("Please enter a value.");
		}

		if (list.includes(typingTag)) {
			return setErrorMessage("This input is already added.");
		}

		if (list.length >= maxInputs) {
			return setErrorMessage("Maximum input size reached.");
		}

		setList([...list, typingTag]);
		setTypingTag("");
		setErrorMessage("");
	};

	const removeTag = (tag: string) => {
		if (!tag) return;

		setList([...list.filter((listItem) => listItem != tag)]);
	};

	const value = {
		id: id || customId,
		list,
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
