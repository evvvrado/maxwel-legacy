import React from "react";

import { cn } from "@/app/styles/mixins";

const Label: React.FC<
	ContainerComponent &
		React.HTMLAttributes<HTMLSpanElement> & {
			text: string;
		}
> = ({ children, text, className, ...props }) => {
	return (
		<label className="w-full">
			<span
				className={cn(
					"mb-2 block text-sm font-bold text-gray-400 ",
					className,
				)}
				{...props}
			>
				{text}
			</span>

			{children}
		</label>
	);
};

export default Label;
