import React, { HTMLAttributes } from "react";

import { cn } from "@/app/styles/mixins";

const Info: React.FC<ContainerComponent & HTMLAttributes<HTMLSpanElement>> = ({
	children,
	className,
	...props
}) => {
	return (
		<span
			className={cn(
				"mb-2 block text-xs font-bold text-gray-500",
				className,
			)}
			{...props}
		>
			{children}
		</span>
	);
};

export default Info;
