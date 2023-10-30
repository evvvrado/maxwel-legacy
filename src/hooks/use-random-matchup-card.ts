import React from "react";

import {
	getRandomChampion,
	POSITION_ROLES,
} from "@/constants/champions-constants";

export const useRandomMatchUpCard = (
	lane: keyof typeof POSITION_ROLES,
	trigger: number,
) => {
	const roleName = POSITION_ROLES[lane].name;
	const roleIndex = Object.keys(POSITION_ROLES).indexOf(lane);

	const [champion, setChampion] = React.useState<
		| {
				fullName: string;
				slugName: string;
				alternativeName: string;
		  }
		| undefined
	>();

	React.useEffect(() => {
		setChampion(undefined);

		setTimeout(
			() => {
				setChampion(getRandomChampion(lane));
			},
			1000 * (roleIndex + 1),
		);
	}, [lane, roleIndex, trigger]);

	return {
		roleName,
		champion,
	};
};
