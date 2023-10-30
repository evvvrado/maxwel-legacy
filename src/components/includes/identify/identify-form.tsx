"use client";

import React from "react";

import { ArrowRight } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";

import * as Form from "@/components/core/system/form";
import { useIdentifyForm } from "@/hooks/use-identify-form";

const IdentifyForm: React.FC = () => {
	const { register, handleSubmit, formState } = useForm();

	const {
		handleNoSummonerName,
		handleSummonerName,
		isLoading,
		isSummonerLoading,
		apiError,
	} = useIdentifyForm();

	return (
		<div className=" max-w-xl m-auto w-full h-full flex-col justify-center flex mt-72">
			<div className="mb-8">
				<h1 className="text-2xl mb-2 font-bold text-gray-950 dark:text-gray-50">
					Maxwel,
				</h1>
				<p className="text-gray-700 dark:text-gray-300">
					Enhancing your custom games
					<br /> experience in League of Legends.
				</p>
			</div>

			<form
				onSubmit={handleSubmit(handleSummonerName)}
				className="flex items-end justify-center gap-2 w-full"
			>
				<Form.Label text="SUMMONER NAME">
					<input
						placeholder="Type here."
						className="input"
						aria-label="Your summoner's name."
						disabled={isLoading}
						aria-disabled={isLoading}
						{...register("summonerName", { required: true })}
					/>
				</Form.Label>

				<Form.FastButton
					submit={true}
					type="primary"
					loading={isLoading || isSummonerLoading}
					disabled={!formState.isValid}
					aria-label="Send form."
				>
					<ArrowRight size={32} />
				</Form.FastButton>
			</form>

			{apiError && (
				<Form.Info className="mr-auto mt-2 text-danger ">
					{apiError.message}
				</Form.Info>
			)}

			<button
				onClick={handleNoSummonerName}
				className="w-fit text-xs text-gray-600 mt-2 underline underline-offset-4 cursor-pointer hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
			>
				I choose not to answer this question.
			</button>
		</div>
	);
};

export default IdentifyForm;
