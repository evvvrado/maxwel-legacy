"use client";

import * as React from "react";

import { NextPage } from "next";

import { useTheme } from "next-themes";
import { Toaster } from "sonner";

import BentoCard from "@/components/core/system/bento/card";
import BentoGrid from "@/components/core/system/bento/grid";
import Header from "@/components/layout/header";

const Lab: NextPage = () => {
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
					<h1 className="text-5xl font-bold text-gray-950 mb-2 dark:text-gray-50 ">
						Maxwel
					</h1>
					<p className="text-lg text-gray-700 dark:text-gray-300">
						Laboratory.
					</p>
				</div>

				<BentoGrid>
					<BentoCard title="Supabase Database" size={4}>
						Texto
					</BentoCard>
				</BentoGrid>
			</main>
		</>
	);
};

export default Lab;
