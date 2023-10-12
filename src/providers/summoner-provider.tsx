"use client";

import React from "react";

import { useRouter } from "next/navigation";

import {
	checkCacheSummoner,
	removeCacheSummoner,
	setCacheSummoner,
} from "@/cache/summoner-cache";

interface SummonerType {
	isSummonerLoading: boolean;
	summonerInfo: Summoner | undefined;
	setSummoner: (summoner: Summoner) => void;
	leaveSummoner: () => void;
}

const SummonerContext = React.createContext({} as SummonerType);

export const SummonerProvider: React.FC<{ children: React.ReactNode }> = (
	props,
) => {
	const router = useRouter();

	const [summonerInfo, setSummonerInfo] = React.useState<
		Summoner | undefined
	>();

	const [isSummonerLoading, setIsSummonerLoading] = React.useState(true);

	const checkUserCacheAndRedirectIfEmpty = async () => {
		try {
			const cacheInfo = await checkCacheSummoner();
			if (!cacheInfo) {
				router.push("/identify");
			} else {
				setSummonerInfo(cacheInfo.summonerInfo);

				router.push("/painel");
			}
			return cacheInfo;
		} catch (error) {
			console.error(error);
		} finally {
			setIsSummonerLoading(false);
		}
	};

	const setSummoner = async (summoner: Summoner) => {
		try {
			await setCacheSummoner(summoner);
			checkUserCacheAndRedirectIfEmpty();
		} catch (error) {
			console.log(error);
		}
	};

	const leaveSummoner = async () => {
		try {
			const cachedSummonerInfo = await checkCacheSummoner();
			if (cachedSummonerInfo) {
				setSummonerInfo(undefined);
				removeCacheSummoner();

				router.push("/identify");
			}
		} catch (error) {
			console.log(error);
		}
	};

	React.useEffect(() => {
		checkUserCacheAndRedirectIfEmpty();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<SummonerContext.Provider
			value={{
				isSummonerLoading,
				summonerInfo,
				setSummoner,
				leaveSummoner,
			}}
		>
			{props.children}
		</SummonerContext.Provider>
	);
};

export const useSummoner = () => React.useContext(SummonerContext);
