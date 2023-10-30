const BASE_URL = "https://br1.api.riotgames.com";
const AMERICAS_BASE_URL = "https://americas.api.riotgames.com";
const API_KEY = process.env.NEXT_PUBLIC_RIOT_API || "";

export const getSummoner = async (summonerName: string) => {
	try {
		const response = await fetch(
			`${BASE_URL}/lol/summoner/v4/summoners/by-name/${encodeURI(
				summonerName,
			)}?api_key=${API_KEY}`,
		);

		if (!response.ok) {
			throw {
				message: response.status,
			};
		}

		const summonerData = await response.json();

		return summonerData;
	} catch (error) {
		const errorName = (
			error as {
				name: string;
			}
		).name;

		if (errorName == "TypeError") {
			throw {
				message: "Invalid summoner's name.",
			};
		}

		throw {
			message: "Undefined problem.",
		};
	}
};

export const getSummonerList = async (summonerNamesList: string[]) => {
	const verifiedSummonerList = [];

	for (const name of summonerNamesList) {
		try {
			const summonerInfo = await getSummoner(name);
			verifiedSummonerList.push(summonerInfo);
		} catch (error) {
			throw name;
		}
	}

	return verifiedSummonerList;
};

export const getRankedMatchList = async (puuid: string) => {
	try {
		const response = await fetch(
			`${AMERICAS_BASE_URL}/lol/match/v5/matches/by-puuid/${puuid}/ids?type=ranked&start=0&count=10&api_key=${API_KEY}`,
		);

		if (!response.ok) {
			throw {
				message: response.status,
			};
		}

		const matchList = await response.json();

		return matchList;
	} catch (error) {
		throw {
			message: "Undefined problem.",
		};
	}
};

export const getMatchInfo = async (matchId: string) => {
	try {
		const response = await fetch(
			`${AMERICAS_BASE_URL}/lol/match/v5/matches/${matchId}?&api_key=${API_KEY}`,
		);

		if (!response.ok) {
			throw {
				message: response.status,
			};
		}

		const matchInfo = await response.json();
		return matchInfo;
	} catch (error) {
		throw {
			message: "Undefined problem.",
		};
	}
};

export const getSummonersKdaFromMatchList = async (
	summonersInfos: Summoner[],
	matchList: Set<string>,
) => {
	const summonersKdas: {
		[summonerName: string]: {
			[matchId: string]: MatchKda;
		};
	} = {};

	for (const matchId of matchList) {
		try {
			const match = await getMatchInfo(matchId);

			for (const summoner of summonersInfos) {
				if (!match.info.participants) continue;

				const participant = match.info.participants.find(
					(participant: SummonerInMatch) =>
						participant.puuid === summoner.puuid,
				);

				if (participant) {
					const { deaths, assists, kills, role } = participant;

					if (!summonersKdas[summoner.name]) {
						summonersKdas[summoner.name] = {};
					}

					summonersKdas[summoner.name][matchId] = {
						deaths,
						assists,
						kills,
						role,
					};
				}
			}
		} catch (error) {
			console.error(`Error processing match ${matchId}: ${error}`);
		}
	}

	return summonersKdas;
};
