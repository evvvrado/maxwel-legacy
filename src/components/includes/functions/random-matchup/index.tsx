"use client";

import React from "react";

import { DiceFive } from "@phosphor-icons/react";

import FlatButton from "@/components/core/system/flat-button";
import TemplateFrame from "@/components/core/system/template-frame";
import RandomMatchUpCard from "@/components/includes/functions/random-matchup/card";
import { POSITION_ROLES } from "@/constants/champions-constants";
import { useRandomMatchup } from "@/hooks/use-random-matchup";

const RandomMatchUp: React.FC = () => {
	const { shuffleTimes, isLoading, incrementShuffle } = useRandomMatchup();

	return (
		<TemplateFrame id="random-matchup">
			<div className="flex flex-col gap-6">
				<ul className="flex w-ful  l flex-wrap items-center justify-between py-4">
					{Object.keys(POSITION_ROLES).map((role) => {
						return (
							<RandomMatchUpCard
								key={role}
								trigger={shuffleTimes}
								lane={role as keyof typeof POSITION_ROLES}
							/>
						);
					})}
				</ul>

				<FlatButton
					onClick={incrementShuffle}
					aria-label="Reroll Champion"
					loading={isLoading}
					loadingText="ROLLING"
					text="REROLL"
					icon={DiceFive}
				/>
			</div>
		</TemplateFrame>
	);
};

export default RandomMatchUp;
