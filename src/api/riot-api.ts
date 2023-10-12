const BASE_URL = "https://br1.api.riotgames.com";
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
