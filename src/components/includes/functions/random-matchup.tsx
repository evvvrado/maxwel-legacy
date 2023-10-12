"use client";

import React, { useEffect } from "react";

import { DiceFive, Spinner } from "@phosphor-icons/react";

import FlatButton from "@/components/core/system/flat-button";
import TemplateFrame from "@/components/core/system/template-frame";
import ChampionRandomCard from "@/components/includes/platform/champion-random-card";
import { POSITION_ROLES } from "@/constants/champions-constants";

const RandomMatchUp: React.FC = () => {
	const [shuffleTimes, setShuffleTimes] = React.useState(1);
	const [isLoading, setIsLoading] = React.useState(false);
	const incrementShuffle = () => setShuffleTimes(shuffleTimes + 1);

	useEffect(() => {
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
		}, 1000 * 5);
	}, [shuffleTimes]);

	return (
		<TemplateFrame id="random-matchup">
			<div className="flex flex-col gap-6">
				<ul className="flex w-ful  l flex-wrap items-center justify-between py-4">
					{Object.keys(POSITION_ROLES).map((role) => {
						return (
							<ChampionRandomCard
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
				>
					{isLoading ? (
						<>
							<figure className="flex items-center justify-center">
								<Spinner size={24} className="animate-spin" />
							</figure>

							<span className="text-sm">ROLLING</span>
						</>
					) : (
						<>
							<figure className="flex items-center justify-center">
								<DiceFive size={24} />
							</figure>

							<span className="text-sm">REROLL</span>
						</>
					)}
				</FlatButton>
			</div>
		</TemplateFrame>
	);
};

export default RandomMatchUp;
