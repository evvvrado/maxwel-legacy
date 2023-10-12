import React from "react";

import { motion, Variants } from "framer-motion";

import { cn } from "@/app/styles/mixins";

type TemplateFrameProps = React.HTMLAttributes<HTMLDivElement>;

const templateFrameVariants: Variants = {
	show: {
		y: 0,
		opacity: 1,
	},
	exit: {
		y: -20,
		opacity: 0,
	},
	initial: {
		y: 20,
		opacity: 0,
	},
};

const TemplateFrame: React.FC<TemplateFrameProps> = ({
	children,
	className,
}) => {
	return (
		<motion.div
			className={cn("w-full h-full", className)}
			variants={templateFrameVariants}
			initial="initial"
			animate="show"
			exit="exit"
			transition={{
				ease: "easeInOut",
				duration: 0.3,
			}}
		>
			{children}
		</motion.div>
	);
};

export default TemplateFrame;
