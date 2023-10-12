import React from "react";

import { ArrowRight, Lightning } from "@phosphor-icons/react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

import { interpreteAndFindCommand } from "@/api/ai-api";
import BentoCard from "@/components/core/system/bento/card";
import * as Form from "@/components/core/system/form";
import { AsSystemFunctionsKeys } from "@/components/includes/functions/system-functions";

const AiCommandCard: React.FC<{
	handle: (slug: AsSystemFunctionsKeys) => void;
}> = ({ handle: setAnswer }) => {
	const { register, handleSubmit, formState, resetField } = useForm();

	const [isLoading, setIsLoading] = React.useState(false);

	const handleAiCommand = async (data: FieldValues) => {
		setIsLoading(true);

		try {
			const commandRequest = await interpreteAndFindCommand(data.command);
			resetField("command");
			setAnswer(commandRequest as AsSystemFunctionsKeys);
		} catch (error) {
			toast.error((error as CustomError).message);
		}

		setIsLoading(false);
	};

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
