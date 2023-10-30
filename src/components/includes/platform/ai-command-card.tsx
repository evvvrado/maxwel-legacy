import React from "react";

import { ArrowRight, Lightning } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";

import BentoCard from "@/components/core/system/bento/card";
import * as Form from "@/components/core/system/form";
import { AsSystemFunctionsKeys } from "@/components/includes/functions/system-functions";
import { useAiCommandCard } from "@/hooks/use-ai-command-card";

const AiCommandCard: React.FC<{
	handle: (slug: AsSystemFunctionsKeys) => void;
}> = ({ handle: setAnswer }) => {
	const { register, handleSubmit, formState, resetField } = useForm();

	const { handleAiCommand, isLoading } = useAiCommandCard(
		setAnswer,
		resetField,
	);

	return (
		<BentoCard icon={Lightning} title="AI POWERED COMMAND" size={4}>
			<form
				onSubmit={handleSubmit(handleAiCommand)}
				className="flex items-end justify-center gap-2"
			>
				<Form.Label text="INSERT HERE YOUR COMMAND">
					<input
						placeholder="Type here your command."
						className="input"
						autoComplete="off"
						disabled={isLoading}
						aria-disabled={isLoading}
						{...register("command", { required: true })}
					/>
				</Form.Label>

				<Form.FastButton
					submit={true}
					type="primary"
					loading={isLoading}
					disabled={!formState.isValid}
				>
					<ArrowRight size={32} />
				</Form.FastButton>
			</form>
		</BentoCard>
	);
};

export default AiCommandCard;
