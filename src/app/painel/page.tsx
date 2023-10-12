"use client";

import * as React from "react";

import { NextPage } from "next";

import { useTheme } from "next-themes";
import { Toaster } from "sonner";

import BentoGrid from "@/components/core/system/bento/grid";
import { AsSystemFunctionsKeys } from "@/components/includes/functions/system-functions";
import ActionCard from "@/components/includes/platform/action-card";
import AiCommandCard from "@/components/includes/platform/ai-command-card";
import OtherFunctionCard from "@/components/includes/platform/other-functions-card";
import Header from "@/components/layout/header";

const Painel: NextPage = () => {
	const [selectedFunctionKey, setSelectedFunctionKey] =
		React.useState<AsSystemFunctionsKeys>();
	const { resolvedTheme } = useTheme();

	return (
		<>
			<Header />
			<Toaster
				richColors
				theme={
					(resolvedTheme as "dark" | "light" | "system") || "light"
				}
			/>

			<main className="w-full max-w-painel mx-auto pt-24">
				<div className="mb-8">
					<span className="py-1 px-2 rounded-full mb-4 block w-fit bg-success/30 border-gray-950/25 text-gray-950/30 dark:text-success font-bold border border-solid ">
						{process.env.NEXT_PUBLIC_VERSION}v Release!!
					</span>

					<h1 className="text-5xl font-bold text-gray-950 mb-2 dark:text-gray-50 ">
						Maxwel
					</h1>
					<p className="text-lg text-gray-700 dark:text-gray-300">
						Enhancing your custom games
						<br />
						experience in League of Legends.
					</p>
				</div>

				<BentoGrid>
					<AiCommandCard handle={setSelectedFunctionKey} />
					<ActionCard selected={selectedFunctionKey} />
					<OtherFunctionCard handle={setSelectedFunctionKey} />
				</BentoGrid>
			</main>
		</>
	);
};

export default Painel;
