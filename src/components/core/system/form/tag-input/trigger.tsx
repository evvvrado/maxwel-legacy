import React from "react";

import { useTagInput } from "./root";

const Trigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { insertTag, typingTag } = useTagInput();

	const outputChildren = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child as React.ReactElement, {
				onClick: insertTag,
				disabled: !typingTag?.length,
			});
		}
		return child;
	});

	return <>{outputChildren}</>;
};

export default Trigger;
