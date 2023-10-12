import React from "react";

import { ArrowRight, Plus } from "@phosphor-icons/react";

import FlatButton from "@/components/core/system/flat-button";
import * as Form from "@/components/core/system/form";
import TemplateFrame from "@/components/core/system/template-frame";

const BalanceTeam: React.FC = () => {
	return (
		<TemplateFrame>
			<div className="flex flex-col gap-3 w-full">
				<p className="text-gray-700 mb-4 dark:text-gray-300">
					To create balanced custom teams, provide the summoner&apos;s
					names for each player in the lobby. We&apos;ll then use KDA
					and the last 10 matches to calculate and present two
					balanced teams.
				</p>

				<Form.Tag.Root maxInputs={10}>
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

				<FlatButton aria-label="Reroll Champion">
					<figure className="flex items-center justify-center">
						<ArrowRight size={24} />
					</figure>

					<span className="text-sm">NEXT STEP</span>
				</FlatButton>
			</div>
		</TemplateFrame>
	);
};

export default BalanceTeam;
