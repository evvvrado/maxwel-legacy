import React from "react";

import { X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";

import { useTagInput } from "./root";

const List: React.FC = () => {
	const { list, removeTag } = useTagInput();

	if (!list.length) return;

	return (
		<ul className="mb-4 mt-3 flex flex-row flex-wrap gap-2">
			<AnimatePresence>
				{list.map((content) => (
					<ListItem
						key={content}
						content={content}
						onClick={() => removeTag(content)}
					/>
				))}
			</AnimatePresence>
		</ul>
	);
};

const ListItem: React.FC<{ content: string; onClick: () => void }> = ({
	content,
	onClick: handleClick,
}) => {
	return (
		<motion.li
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			layout
			transition={{ opacity: { duration: 0.2 } }}
			className="group pill"
		>
			<span className="text-xs font-bold">{content}</span>
			<button
				onClick={handleClick}
				aria-label={`Remove ${content}`}
				className="cursor-pointer group-hover:text-danger"
			>
				<X size={12} />
			</button>
		</motion.li>
	);
};

export default List;
