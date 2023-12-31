import { getRandomNumber } from "@/utils";

export const POSITION_ROLES = {
	top: {
		name: "Top Lane",
		slug: "top",
	},
	jungle: {
		name: "Jungle",
		slug: "jungle",
	},
	mid: {
		name: "Mid Lane",
		slug: "mid",
	},
	adc: {
		name: "Ad Carry",
		slug: "adc",
	},
	sup: {
		name: "Support",
		slug: "sup",
	},
};

export const CHAMPION_ALTERNATIVE_NAME = {
	Wukong: "MonkeyKing",
	"Renata Glasc": "Renata",
	"Nunu & Willump": "Nunu",
};

export const CHAMPIONS_BY_ROLE = {
	top: [
		"Aatrox",
		"Akali",
		"Camille",
		"Darius",
		"Fiora",
		"Gangplank",
		"Garen",
		"Gnar",
		"Gwen",
		"Illaoi",
		"Irelia",
		"Jax",
		"Jayce",
		"Kayle",
		"K'Sante",
		"Kennen",
		"Kled",
		"Malphite",
		"Maokai",
		"Mordekaiser",
		"Nasus",
		"Ornn",
		"Pantheon",
		"Poppy",
		"Quinn",
		"Renekton",
		"Rengar",
		"Riven",
		"Sett",
		"Shen",
		"Singed",
		"Sion",
		"Teemo",
		"Trundle",
		"Tryndamere",
		"Urgot",
		"Vayne",
		"Volibear",
		"Wukong",
		"Yasuo",
		"Yorick",
	],
	jungle: [
		"Amumu",
		"Briar",
		"Elise",
		"Evelynn",
		"Fiddlesticks",
		"Gragas",
		"Graves",
		"Hecarim",
		"Ivern",
		"JarvanIV",
		"Jax",
		"Kayn",
		"Kha'zix",
		"Kindred",
		"Lee Sin",
		"Master Yi",
		"Naafiri",
		"Nidalee",
		"Nocturne",
		"Nunu & Willump",
		"Olaf",
		"Pantheon",
		"Poppy",
		"Rek'Sai",
		"Rengar",
		"Sejuani",
		"Shaco",
		"Shyvana",
		"Skarner",
		"Taliyah",
		"Trundle",
		"Udyr",
		"Vi",
		"Volibear",
		"Warwick",
		"Wukong",
		"Xin Zhao",
		"Zac",
		"Zed",
	],
	mid: [
		"Ahri",
		"Akali",
		"Akshan",
		"Anivia",
		"Annie",
		"Aurelion Sol",
		"Azir",
		"Cassiopeia",
		"Diana",
		"Ekko",
		"Fizz",
		"Galio",
		"Irelia",
		"Jayce",
		"Kassadin",
		"Katarina",
		"Leblanc",
		"Lissandra",
		"Lucian",
		"Malphite",
		"Malzahar",
		"Naafiri",
		"Neeko",
		"Orianna",
		"Pantheon",
		"Qiyana",
		"Rumble",
		"Ryze",
		"Seraphine",
		"Sett",
		"Swain",
		"Sylas",
		"Syndra",
		"Talon",
		"Twisted Fate",
		"Veigar",
		"Vex",
		"Viktor",
		"Vladimir",
		"Xerath",
		"Yasuo",
		"Yone",
		"Zed",
		"Ziggs",
		"Zoe",
	],
	adc: [
		"Akshan",
		"Aphelios",
		"Ashe",
		"Caitlyn",
		"Draven",
		"Ezreal",
		"Jhin",
		"Jinx",
		"Kai'sa",
		"Kalista",
		"Kog'Maw",
		"Lucian",
		"Miss Fortune",
		"Nilah",
		"Samira",
		"Sivir",
		"Tristana",
		"Twitch",
		"Varus",
		"Vayne",
		"Xayah",
		"Zeri",
	],
	sup: [
		"Alistar",
		"Bard",
		"Blitzcrank",
		"Braum",
		"Janna",
		"Karma",
		"Leona",
		"Lulu",
		"Lux",
		"Morgana",
		"Nami",
		"Nautilus",
		"Milio",
		"Pantheon",
		"Pyke",
		"Rakan",
		"Renata Glasc",
		"Senna",
		"Seraphine",
		"Sona",
		"Soraka",
		"Swain",
		"Taric",
		"Thresh",
		"Yuumi",
		"Zyra",
	],
};

export const getRandomChampion = (lane: keyof typeof POSITION_ROLES) => {
	if (!lane) return;

	const laneChampions = CHAMPIONS_BY_ROLE[lane];

	if (!laneChampions) return;

	const randomChampionId = getRandomNumber(0, laneChampions.length - 1);
	const selectedChampionId = laneChampions[randomChampionId];

	if (!selectedChampionId) return;

	const championSlugName = selectedChampionId.replace(/['\s]/g, "");
	const alternativeName =
		CHAMPION_ALTERNATIVE_NAME[
			selectedChampionId as keyof typeof CHAMPION_ALTERNATIVE_NAME
		] || championSlugName;

	return {
		fullName: selectedChampionId,
		slugName: championSlugName,
		alternativeName,
	};
};
