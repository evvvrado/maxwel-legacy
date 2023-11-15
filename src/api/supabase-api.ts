import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uzysopnwxpkqoercnuxa.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API || "";

export const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchSummoner = async (puuid: string) => {
	const { data, error } = await supabase
		.from("stored_summoners")
		.select("*")
		.eq("uuid", puuid);

	if (error) {
		throw error.message;
	}

	return data[0];
};

export const insertSummoner = async ({
	ratio,
	kills,
	deaths,
	assists,
	puuid: uuid,
}: SummonerKda) => {
	const { data, error } = await supabase
		.from("stored_summoners")
		.insert([{ uuid, kills, deaths, assists, ratio }])
		.select();

	if (error) {
		throw error.message;
	}

	return data;
};

export const fetchStoredSummoners = async () => {
	const { data, error } = await supabase.from("stored_summoners").select("*");

	if (error) {
		throw new Error(error.message);
	}

	return data;
};
