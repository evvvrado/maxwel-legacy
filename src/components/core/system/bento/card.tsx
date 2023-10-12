import React from "react";

import { Icon } from "@phosphor-icons/react";

import { cn } from "@/app/styles/mixins";

const sizes = {
	1: "w-bento-1",
	1.5: "w-bento-1.5",
	2: "w-bento-2",
	3: "w-bento-3",
	3.5: "w-bento-3.5",
	4: "w-bento-4",
};

const BentoCard: React.FC<
	React.HTMLAttributes<HTMLDivElement> & {
		title: string | undefined;
		icon?: Icon;
		size?: keyof typeof sizes;
	}
> = ({
	className,
	children,
	size = 4,
	title = "Card Title",
	icon: Icon,
	...defaultProps
}) => {
	return (
		<div
			className={cn(
				`p-8 rounded-2xl bg-gray-50 border border-solid border-gray-300 dark:bg-gray-950 dark:border-gray-900`,
				sizes[size],
				className,
			)}
			{...defaultProps}
		>
			<h3 className="mb-6 flex w-fit items-center gap-2 text-base font-semibold text-gray-900 dark:text-gray-50">
				{Icon && (
					<picture className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
						<Icon size={12} />
					</picture>
				)}
				{title}
			</h3>
			{children}
		</div>
	);
};

export default BentoCard;
