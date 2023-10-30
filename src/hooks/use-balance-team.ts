import React from "react";

import { toast } from "sonner";

import {
	getRankedMatchList,
	getSummonerList,
	getSummonersKdaFromMatchList,
} from "@/api/riot-api";

export const useBalanceTeam = () => {
	const [isVerified, setIsVerified] = React.useState(false);
	const [isVerifying, setIsVerifying] = React.useState(false);

	const [summonerNamesList, setSummonerNamesList] = React.useState<string[]>(
		[],
	);

	const [dividedTeams, setDivideTeams] = React.useState<TeamList>();

	const handleVerifyList = async () => {
		setIsVerifying(true);

		try {
			const verifiedList = await getSummonerList(summonerNamesList);
			setIsVerified(true);

			handleGetSummonersKdas(verifiedList);
		} catch (error) {
			toast.error(`${error} is not a valid summoner.`);
		} finally {
			setIsVerifying(false);
		}
	};

	const handleGetSummonersKdas = async (list: Summoner[]) => {
		const matchList = new Set<string>();
		const summonerKdas: SummonerKda[] = [];

		await Promise.all(
			list.map(async (summonerInfo) => {
				const matches = await getRankedMatchList(summonerInfo.puuid);
				matches.forEach((match: string) => matchList.add(match));
			}),
		);

		const summonersKdasList = await getSummonersKdaFromMatchList(
			list,
			matchList,
		);

		Object.keys(summonersKdasList).map((summonerName) => {
			const generalKda = {
				kills: 0,
				assists: 0,
				deaths: 0,
			};

			Object.keys(summonersKdasList[summonerName]).map((matchId) => {
				const match: MatchKda =
					summonersKdasList[summonerName][matchId];

				generalKda.kills += match.kills;
				generalKda.assists += match.assists;
				generalKda.deaths += match.deaths;
			});

			summonerKdas.push({
				name: summonerName,
				ratio: Number(
					(
						(generalKda.kills + generalKda.assists) /
						generalKda.deaths
					).toFixed(1),
				),
				...generalKda,
			});
		});

		divideIntoTeams(summonerKdas);
	};

	const divideIntoTeams = (namesAndRatios: SummonerKda[]) => {
		namesAndRatios.sort((a, b) => b.ratio - a.ratio);
		let blueRatio = 0;
		let redRatio = 0;

		const teams: TeamList = {
			blue: [],
			red: [],
		};

		namesAndRatios.forEach((item) => {
			if (blueRatio <= redRatio) {
				teams.blue.push(item);
				blueRatio += item.ratio;
			} else {
				teams.red.push(item);
				redRatio += item.ratio;
			}
		});

		setDivideTeams(teams);
	};

	return {
		summonerNamesList,
		setSummonerNamesList,
		isVerifying,
		isVerified,
		dividedTeams,
		handleVerifyList,
	};
};
