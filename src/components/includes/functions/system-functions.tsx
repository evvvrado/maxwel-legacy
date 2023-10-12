import BalanceTeam from "./balance-team";
import RandomMatchUp from "./random-matchup";

export const systemFunctions = {
	"generate-random-match-up-lol-champions": {
		name: "GENERATE RANDOM MATCH UP.",
		component: <RandomMatchUp key="random-match-up" />,
	},
	"balance-team-matchup-friends-rank-kda-custom-game-team": {
		name: "BALANCE CUSTOM GAME TEAM.",
		component: <BalanceTeam key="balance-team" />,
	},
};

export const systemFunctionsKeys = Object.keys(systemFunctions);

export type AsSystemFunctionsKeys = keyof typeof systemFunctions;
