import React from "react";

import { cn } from "@/app/styles/mixins";

const BalanceTeamTable: React.FC<
	{
		list: SummonerKda[];
	} & React.HTMLAttributes<HTMLDivElement>
> = ({ className, list, ...defaultProps }) => {
	return (
		<div className={cn(className, "w-full")} {...defaultProps}>
			<div className="h-8 w-full flex items-center justify-between rounded-lg border-gray-200 border  border-solid bg-gray-100 py-2 px-4 dark:bg-gray-900 dark:border-gray-800">
				<span className="text-xs  text-center font-medium text-gray-400 dark:text-gray-400 w-full">
					NAME
				</span>

				<span className="text-xs  text-center select-none font-medium text-gray-400 dark:text-gray-400 w-full">
					KILLS
				</span>

				<span className="text-xs  text-center select-none font-medium text-gray-400 dark:text-gray-400 w-full">
					DEATHS
				</span>

				<span className="text-xs  text-center select-none font-medium text-gray-400 dark:text-gray-400 w-full">
					ASSISTS
				</span>

				<span className="text-xs  text-center select-none font-medium text-gray-400 dark:text-gray-400 w-full">
					RATIO
				</span>
			</div>
			{list.map((summoner) => (
				<div
					key={summoner.name}
					className="h-8 mt-2 w-full flex items-center justify-between py-2 px-4"
				>
					<span className="text-xs  text-center font-bold text-gray-600 dark:text-gray-200 w-full">
						{summoner.name}
					</span>

					<span className="text-xs  text-center font-bold text-gray-600 dark:text-gray-200 w-full">
						{summoner.kills}
					</span>

					<span className="text-xs  text-center font-bold text-gray-600 dark:text-gray-200 w-full">
						{summoner.deaths}
					</span>

					<span className="text-xs  text-center font-bold text-gray-600 dark:text-gray-200 w-full">
						{summoner.assists}
					</span>

					<span className="text-xs  text-center font-bold text-gray-600 dark:text-gray-200 w-full">
						{summoner.ratio}
					</span>
				</div>
			))}
		</div>
	);
};

export default BalanceTeamTable;
