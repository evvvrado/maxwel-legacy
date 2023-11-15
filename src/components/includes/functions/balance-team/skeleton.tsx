import React from "react";

const BalanceTeamSkeleton: React.FC = () => {
	return (
		<div className="w-full">
			<div className="h-8 w-full animate-pulse rounded-lg border-gray-200 border  border-solid bg-gray-200 dark:bg-gray-900 dark:border-gray-800" />

			<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
			<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
			<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
			<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
			<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />

			<div className="h-8 mt-4 w-full animate-pulse rounded-lg border-gray-200 border  border-solid bg-gray-200 dark:bg-gray-900 dark:border-gray-800" />

			<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
			<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
			<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
			<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
			<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
		</div>
	);
};

export default BalanceTeamSkeleton;
