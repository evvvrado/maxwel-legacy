import { cacheList, checkCacheItem } from "./core-cache";

const TEN_DAYS_IN_MILISECONDS = 10 * 24 * 60 * 60 * 1000;

export const checkCacheSummoner = async () => {
	const summonerInfo: SummonerCacheModel = await checkCacheItem("user");
	const tenDaysBeforeDate = new Date();

	tenDaysBeforeDate.setTime(
		tenDaysBeforeDate.getTime() - TEN_DAYS_IN_MILISECONDS,
	);

	if (summonerInfo && new Date(summonerInfo.lastChange) > tenDaysBeforeDate) {
		return summonerInfo;
	}

	return null;
};

export const setCacheSummoner = async (summonerInfo: Summoner) => {
	const summoner: SummonerCacheModel = {
		summonerInfo,
		lastChange: new Date(),
	};

	try {
		window.localStorage.setItem(cacheList.user, JSON.stringify(summoner));
		return summoner;
	} catch (error) {
		console.warn(error);
		return null;
	}
};

export const removeCacheSummoner = async () => {
	try {
		window.localStorage.removeItem(cacheList.user);
	} catch (error) {
		console.warn(error);
	}
};
