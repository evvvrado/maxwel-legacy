import React from "react";

import { FieldValues } from "react-hook-form";

import { getSummoner } from "@/api/riot-api";
import { useSummoner } from "@/providers/summoner-provider";

export const useIdentifyForm = () => {
	const { setSummoner, isSummonerLoading } = useSummoner();

	const [apiError, setApiError] = React.useState<CustomError>();
	const [isLoading, setIsLoading] = React.useState(false);

	const handleSummonerName = async (data: FieldValues) => {
		setIsLoading(true);
		try {
			const requestedData = await getSummoner(data.summonerName);
			setSummoner(requestedData);
		} catch (error) {
			setApiError(error as CustomError);
		} finally {
			setIsLoading(false);
		}
	};
	const handleNoSummonerName = async () => {
		setSummoner({
			accountId: "",
			puuid: "",
			name: "",
			profileIconId: 1,
			revisionDate: 0,
			summonerLevel: 0,
		});
	};

	return {
		handleNoSummonerName,
		handleSummonerName,
		isLoading,
		isSummonerLoading,
		apiError,
	};
};
