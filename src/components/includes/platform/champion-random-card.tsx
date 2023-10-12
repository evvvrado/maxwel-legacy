import React from "react";

import AvatarFrame from "@/components/core/system/avatar-frame";
import RoleIcon from "@/components/includes/platform/role-icon";
import {
	getRandomChampion,
	POSITION_ROLES,
} from "@/constants/champions-constants";

type ChampionRandomCardProps = {
	lane: keyof typeof POSITION_ROLES;
	trigger: number;
};

const ChampionRandomCard: React.FC<ChampionRandomCardProps> = ({
	lane,
	trigger,
}) => {
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

	if (!champion)
		return (
			<div className="bg-gray-300 dark:bg-gray-900 animate-pulse w-24 h-48 rounded relative top-1"></div>
		);

	return (
		<li>
			<a
				href={`https://u.gg/lol/champions/${champion.slugName}/build/${lane}`}
				target="_blank"
				aria-label="Select to access the champion in OP.GG Page."
				className=" flex w-fit select-none flex-col items-center justify-center gap-4 rounded-md border border-gray-50 px-2 py-2 transition-colors hover:border-gray-200 hover:bg-gray-100 hover:opacity-80 dark:border-gray-950 hover:dark:border-gray-700 hover:dark:bg-gray-800"
			>
				<div>
					<picture className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
						<RoleIcon role={lane} size={13} />
					</picture>
					<span className="mt-0.5 w-full text-center text-xs uppercase text-gray-900 dark:text-gray-200">
						{roleName}
					</span>
				</div>

				<AvatarFrame
					title={`${champion.fullName}'s name`}
					src={`http://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${champion.alternativeName}.png`}
					size="md"
				/>

				<strong className="rounded-full  bg-gray-100 px-2 py-1 text-sm font-semibold uppercase text-gray-800 dark:bg-gray-800 dark:text-gray-300 ">
					{champion.fullName}
				</strong>
			</a>
		</li>
	);
};

export default ChampionRandomCard;
