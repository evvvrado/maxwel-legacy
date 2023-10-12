import React, { HTMLAttributes } from "react";

import { Spinner } from "@phosphor-icons/react";

import { cn } from "@/app/styles/mixins";

const fastButtonTypes = {
	primary:
		"bg-gray-950 p-3 text-gray-50 hover:bg-gray-600 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-300",
	outline:
		"p-3 dark:text-gray-500 border-solid border-gray-950 border text-gray-900 dark:border-gray-500 dark:hover:border-gray-50 dark:hover:text-gray-50 hover:text-gray-400 hover:border-gray-400",
};

type FastButtonProps = HTMLAttributes<HTMLButtonElement> & {
	type?: keyof typeof fastButtonTypes;
	loading?: boolean;
	disabled?: boolean;
	submit?: boolean;
};

const FastButton: React.FC<FastButtonProps> = ({
	submit = false,
	type = "primary",
	loading,
	children,
	className,
	disabled = false,
	...props
}) => {
	return (
		<button
			className={cn(
				"flex aspect-square h-full items-center justify-center rounded-lg transition-all disabled:pointer-events-none disabled:cursor-not-allowed",
				fastButtonTypes[type],
				className,
			)}
			type={submit ? "submit" : "button"}
			disabled={loading || disabled}
			aria-disabled={loading || disabled}
			{...props}
		>
			{loading ? (
				<Spinner size={32} className="animate-spin" />
			) : (
				children
			)}
		</button>
	);
};

export default FastButton;
