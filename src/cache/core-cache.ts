export const cacheList = {
	user: "summoner-client-info",
};

export const checkCacheItem = async (key: keyof typeof cacheList) => {
	const initialValue = {};

	try {
		const item = window.localStorage.getItem(cacheList[key]);
		return item ? JSON.parse(item) : initialValue;
	} catch (error) {
		console.warn(error);
		return null;
	}
};
