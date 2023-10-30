import React from "react";

import { ArrowRight, TextAlignJustify } from "@phosphor-icons/react";

import BentoCard from "@/components/core/system/bento/card";
import {
	AsSystemFunctionsKeys,
	systemFunctions,
	systemFunctionsKeys,
} from "@/components/includes/functions/system-functions";

const OtherFunctionCard: React.FC<{
	handle: (slug: AsSystemFunctionsKeys) => void;
}> = ({ handle }) => {
	return (
		<BentoCard icon={TextAlignJustify} title="SELECT A FUNCTION" size={1.5}>
			<h3 className="mb-2 block text-xs font-bold text-gray-500 ">
				OR SELECT AN OPTION
			</h3>
			<ul className="flex flex-col gap-2">
				{systemFunctionsKeys.map((key) => {
					const { name } =
						systemFunctions[key as AsSystemFunctionsKeys];

					return (
						<li key={key}>
							<button
								className="relative w-full gap-4 rounded-lg bg-gray-100 px-4 py-2 text-left text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800  dark:text-gray-300 dark:hover:bg-gray-700"
								onClick={() =>
									handle(key as AsSystemFunctionsKeys)
								}
								aria-label={`Select to ${name}`}
							>
								<span className="text-xs uppercase">
									{name}
								</span>

								<figure className="absolute right-4 top-2 translate-y-1.5">
									<ArrowRight size={14} />
								</figure>
							</button>
						</li>
					);
				})}

				{[...Array(6 - systemFunctionsKeys.length)].map((_, i) => (
					<li
						key={i}
						className="relative w-full gap-4 h-10 opacity-50 rounded-lg bg-gray-100 px-4 py-2 text-left text-gray-600 transition-color dark:bg-gray-800  dark:text-gray-300 "
					/>
				))}
			</ul>
		</BentoCard>
	);
};

export default OtherFunctionCard;
