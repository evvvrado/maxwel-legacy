import React from "react";

import { toast } from "sonner";

import {
	getRankedMatchList,
	getSummonerList,
	getSummonersKdaFromMatchList,
} from "@/api/riot-api";
import { fetchSummoner, insertSummoner } from "@/api/supabase-api";

export const useBalanceTeam = () => {
	const [currentStep, setCurrentStep] = React.useState(0);

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
		const { fetchedSummoners, notFetchedSummoners } =
			await handleDefineSummonersOrigin(list);

		const matchList = new Set<string>();
		const readyToInsertSummonersKdas: SummonerKda[] = [];

		await Promise.all(
			notFetchedSummoners.map(async (summonerInfo) => {
				const matches = await getRankedMatchList(summonerInfo.puuid);
				matches.forEach((match: string) => matchList.add(match));
			}),
		);

		setCurrentStep(1);

		const summonersKdasList = await getSummonersKdaFromMatchList(
			notFetchedSummoners,
			matchList,
		);

		const summonerKdas = fetchedSummoners.concat(
			Object.keys(summonersKdasList).map((summonerName) => {
				const generalKda = {
					kills: 0,
					assists: 0,
					deaths: 0,
				};

				Object.keys(summonersKdasList[summonerName]).forEach(
					(matchId) => {
						const match: MatchKda =
							summonersKdasList[summonerName][matchId];
						generalKda.kills += match.kills;
						generalKda.assists += match.assists;
						generalKda.deaths += match.deaths;
					},
				);

				const ratio = Number(
					(
						(generalKda.kills + generalKda.assists) /
						generalKda.deaths
					).toFixed(1),
				);

				const summonerKda = {
					name: summonerName,
					puuid:
						list.find((summoner) => summoner.name === summonerName)
							?.puuid || "666",
					ratio,
					...generalKda,
				};

				readyToInsertSummonersKdas.push(summonerKda);

				return summonerKda;
			}),
		);
		setCurrentStep(2);

		await Promise.all(
			readyToInsertSummonersKdas.map(async (summonerKda) => {
				try {
					await insertSummoner(summonerKda);
				} catch (error) {
					console.error(
						`Error inserting summoner ${summonerKda.name}: ${error}`,
					);
				}
			}),
		);

		setTimeout(async () => {
			await divideIntoTeams(summonerKdas);
		}, 1000);
	};

	const handleDefineSummonersOrigin = async (list: Summoner[]) => {
		const fetchedSummoners: SummonerKda[] = [];
		const notFetchedSummoners: Summoner[] = [];

		await Promise.all(
			list.map(async (summonerInfo) => {
				try {
					const {
						puuid,
						ratio,
						kills,
						assists,
						deaths,
						updated_at,
					}: Omit<SummonerKda, "name"> & { updated_at: string } =
						await fetchSummoner(summonerInfo.puuid);

					const todayDate = new Date();
					const updatedDate = new Date(updated_at);
					const tenDaysBeforeDate = new Date(todayDate);

					tenDaysBeforeDate.setDate(todayDate.getDate() - 10);

					if (tenDaysBeforeDate < updatedDate) {
						fetchedSummoners.push({
							name: summonerInfo.name,
							puuid,
							ratio,
							kills,
							assists,
							deaths,
						});
					} else {
						throw "Outdated Info";
					}
				} catch (error) {
					notFetchedSummoners.push(summonerInfo);
				}
			}),
		);

		return { fetchedSummoners, notFetchedSummoners };
	};

	const divideIntoTeams = async (namesAndRatios: SummonerKda[]) => {
		const sortedNamesAndRatios = [...namesAndRatios].sort(
			(a, b) => b.ratio - a.ratio,
		);

		let blueRatio = 0;
		let redRatio = 0;

		const teams: TeamList = {
			blue: [],
			red: [],
		};

		setCurrentStep(3);

		setTimeout(() => {
			for (const summonerKda of sortedNamesAndRatios) {
				if (blueRatio <= redRatio) {
					teams.blue.push(summonerKda);
					blueRatio += summonerKda.ratio;
				} else {
					teams.red.push(summonerKda);
					redRatio += summonerKda.ratio;
				}
			}

			setDivideTeams(teams);
		}, 1000);
	};

	return {
		summonerNamesList,
		setSummonerNamesList,
		isVerifying,
		isVerified,
		dividedTeams,
		handleVerifyList,
		currentStep,
	};
};
