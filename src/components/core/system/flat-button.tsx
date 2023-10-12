import React from "react";

import { cn } from "@/app/styles/mixins";

type FlatButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	loading?: boolean;
	disabled?: boolean;
};

const FlatButton: React.FC<FlatButtonProps> = ({
	className,
	loading,
	disabled,
	...props
}) => {
	return (
		<button
			className={cn(
				"w-fit flex gap-2 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-900 px-4 py-2 dark:hover:text-gray-50 text-gray-500  hover:text-gray-950 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-70",
				className,
			)}
			disabled={loading || disabled}
			aria-disabled={loading || disabled}
			{...props}
		/>
	);
};

export default FlatButton;
