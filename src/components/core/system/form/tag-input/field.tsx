import React from "react";

import { useTagInput } from "./root";

const Field: React.FC = () => {
	const { insertTag, typingTag, setTypingTag } = useTagInput();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTypingTag(e.target.value);
	};

	const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== "Enter") return;
		insertTag();
	};

	return (
		<input
			type="text"
			placeholder="Insert here."
			className="input"
			value={typingTag}
			onChange={handleInputChange}
			onKeyDown={handlePress}
		/>
	);
};

export default Field;
