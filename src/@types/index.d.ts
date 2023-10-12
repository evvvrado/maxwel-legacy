type SeoType = {
	title: string;
	description?: string;
};

type Summoner = {
	accountId: string;
	profileIconId: int;
	revisionDate: long;
	name: string;
	puuid: string;
	summonerLevel: long;
};

type ContainerComponent = {
	children: ReactNode;
};

type CustomError = {
	message: string;
};

type SummonerCacheModel = {
	summonerInfo: Summoner;
	lastChange: Date;
};
