import React from "react";

import { Icon as IconType, Spinner } from "@phosphor-icons/react";

import { cn } from "@/app/styles/mixins";

type FlatButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	loading?: boolean;
	text: string;
	loadingText: string;
	icon?: IconType;
	disabled?: boolean;
};

const FlatButton: React.FC<FlatButtonProps> = ({
	className,
	loading,
	disabled,
	text,
	loadingText,
	icon: Icon,
	...props
}) => {
	return (
		<button
			className={cn(
				"w-fit flex gap-2 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 select-none dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-900 px-4 py-2 dark:hover:text-gray-50 text-gray-500  hover:text-gray-950 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-70",
				className,
			)}
			disabled={loading || disabled}
			aria-disabled={loading || disabled}
			{...props}
		>
			<figure className="flex items-center justify-center">
				{Icon &&
					(loading ? (
						<Spinner size={24} className="animate-spin" />
					) : (
						<Icon size={24} />
					))}
			</figure>

			<span className="text-sm">{loading ? loadingText : text}</span>
		</button>
	);
};

export default FlatButton;
