import React from "react";

import { Target } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import colors from "tailwindcss/colors";

import BentoCard from "@/components/core/system/bento/card";
import TemplateFrame from "@/components/core/system/template-frame";

import {
	AsSystemFunctionsKeys,
	systemFunctions,
} from "../functions/system-functions";

const ActionCard: React.FC<{
	selected: AsSystemFunctionsKeys | undefined;
}> = ({ selected }) => {
	const selectedFunction = selected ? systemFunctions[selected] : undefined;

	return (
		<BentoCard
			icon={Target}
			title={`ACTION CARD ${
				selectedFunction !== undefined
					? "- " + selectedFunction.name
					: ""
			}`}
			size={3.5}
		>
			<AnimatePresence initial={false} mode="wait">
				{selectedFunction ? (
					selectedFunction.component
				) : (
					<NoFunctionSelected />
				)}
			</AnimatePresence>
		</BentoCard>
	);
};

const NoFunctionSelected = () => {
	return (
		<TemplateFrame className="w-full h-full flex flex-col items-center pt-12  text-center">
			<picture className="w-20 h-20 rounded-full bg-gray-100 mb-6 flex items-center justify-center dark:bg-gray-800">
				<svg
					width="56"
					height="54"
					viewBox="0 0 56 54"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						x="0.946014"
						y="21.9097"
						width="2.05473"
						height="10.1802"
						rx="1.02736"
						fill={colors.neutral[500]}
					/>
					<rect
						x="9.50739"
						y="11.0757"
						width="2.05473"
						height="31.8483"
						rx="1.02736"
						fill={colors.neutral[500]}
					/>
					<rect
						x="18.0688"
						y="9.021"
						width="2.05473"
						height="35.9577"
						rx="1.02736"
						fill={colors.neutral[500]}
					/>
					<rect
						x="26.6301"
						y="0.802246"
						width="2.39718"
						height="52.3956"
						rx="1.19859"
						fill={colors.neutral[500]}
					/>
					<rect
						x="35.5339"
						y="9.021"
						width="2.05473"
						height="35.9577"
						rx="1.02736"
						fill={colors.neutral[500]}
					/>
					<rect
						x="44.0953"
						y="10.0483"
						width="2.39718"
						height="33.903"
						rx="1.19859"
						fill={colors.neutral[500]}
					/>
					<rect
						x="52.9991"
						y="21.9097"
						width="2.05473"
						height="10.1802"
						rx="1.02736"
						fill={colors.neutral[500]}
					/>
				</svg>
			</picture>

			<strong className="text-lg font-bold  leading-5 mb-2 block max-w-xs text-gray-900 dark:text-gray-50">
				Sorry, it seems there&apos;s no selected function to display
				right now.
			</strong>
			<p className="text-sm text-gray-400 max-w-xs ">
				Please select an option or enter a prompt in the input field
				above.
			</p>
		</TemplateFrame>
	);
};
export default ActionCard;
