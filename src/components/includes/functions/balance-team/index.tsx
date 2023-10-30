"use client";

import React from "react";

import { Check, Plus } from "@phosphor-icons/react";

import FlatButton from "@/components/core/system/flat-button";
import * as Form from "@/components/core/system/form";
import TemplateFrame from "@/components/core/system/template-frame";
import { useBalanceTeam } from "@/hooks/use-balance-team";

import BalanceTeamTable from "./table";

const BalanceTeam: React.FC = () => {
	const {
		handleVerifyList,
		summonerNamesList,
		setSummonerNamesList,
		isVerifying,
		dividedTeams,
		isVerified,
	} = useBalanceTeam();

	return (
		<TemplateFrame>
			{!isVerified ? (
				<div className="flex flex-col gap-3 w-full">
					<p className="text-gray-700 mb-4 dark:text-gray-300">
						To create balanced custom teams, provide the
						summoner&apos;s names for each player in the lobby.
						We&apos;ll then use KDA and the last 10 matches to
						calculate and present two balanced teams.
					</p>

					<Form.Tag.Root
						maxInputs={10}
						list={summonerNamesList}
						setList={setSummonerNamesList}
					>
						<div className="flex w-full items-end justify-center gap-2">
							<Form.Label text="INSERT THE SUMMONERS NAMES">
								<Form.Tag.Field />
							</Form.Label>

							<Form.Tag.Trigger>
								<Form.FastButton type="outline">
									<Plus size={32} />
								</Form.FastButton>
							</Form.Tag.Trigger>
						</div>
						<Form.Tag.Error />

						<Form.Tag.List />
					</Form.Tag.Root>

					<FlatButton
						aria-label="Verify if teams members exists and goes to the next step."
						text="READY"
						icon={Check}
						loading={isVerifying}
						disabled={summonerNamesList.length < 4}
						loadingText="VERIFYING"
						onClick={handleVerifyList}
					/>
				</div>
			) : (
				<div className="w-full">
					{dividedTeams ? (
						<>
							<BalanceTeamTable list={dividedTeams.blue} />
							<BalanceTeamTable
								className="mt-4"
								list={dividedTeams.red}
							/>
						</>
					) : (
						<div className="w-full">
							<div className="h-8 w-full animate-pulse rounded-lg border-gray-200 border  border-solid bg-gray-200 dark:bg-gray-900 dark:border-gray-800" />

							<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
							<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
							<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
							<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
							<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />

							<div className="h-8 mt-4 w-full animate-pulse rounded-lg border-gray-200 border  border-solid bg-gray-200 dark:bg-gray-900 dark:border-gray-800" />

							<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
							<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
							<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
							<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
							<div className="h-8 mt-2 w-full animate-pulse  bg-gray-100 dark:bg-gray-900" />
						</div>
					)}
				</div>
			)}
		</TemplateFrame>
	);
};

export default BalanceTeam;
