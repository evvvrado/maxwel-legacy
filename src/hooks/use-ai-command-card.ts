import React from "react";

import { FieldValues, UseFormResetField } from "react-hook-form";
import { toast } from "sonner";

import { interpreteAndFindCommand } from "@/api/ai-api";
import { AsSystemFunctionsKeys } from "@/components/includes/functions/system-functions";

export const useAiCommandCard = (
	setAnswer: (slug: AsSystemFunctionsKeys) => void,
	resetField: UseFormResetField<FieldValues>,
) => {
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

	return { handleAiCommand, isLoading };
};
