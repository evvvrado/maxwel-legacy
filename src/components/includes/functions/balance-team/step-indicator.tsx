import React from "react";

import { Check, Spinner } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const StepIndicator: React.FC<{
	text: string;
	step: number;
	currentStep: number;
}> = ({ text, step, currentStep }) => {
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		if (step <= currentStep) setLoading(false);
	}, [currentStep, step]);

	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				ease: "easeOut",
				duration: 0.2,
			}}
			className={`w-full flex gap-4 items-center rounded-full transition-colors px-4 py-2 ${
				!loading
					? "bg-gray-100 border border-success dark:bg-gray-800 dark:text-gray-50"
					: "bg-gray-100  dark:bg-gray-800 dark:text-gray-50 animate-pulse"
			}`}
		>
			<figure className="flex items-center justify-center">
				{loading ? (
					<Spinner size={24} className="animate-spin" />
				) : (
					<Check size={24} className="text-success">
						<animate
							attributeName="fill"
							values="transparent;currentColor"
							dur=".2s"
							repeatCount="1"
						></animate>
					</Check>
				)}
			</figure>

			<div className="text-sm flex flex-col gap-2 h-5 overflow-hidden">
				<motion.span
					animate={{ y: loading ? 0 : -28 }}
					className="block"
				>
					{text}
				</motion.span>
				<motion.span
					animate={{ y: loading ? 0 : -28 }}
					className="block"
				>
					{text}
				</motion.span>
			</div>
		</motion.div>
	);
};

export default StepIndicator;
