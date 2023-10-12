import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
	content: ["./src/**/*.tsx"],

	darkMode: "class",

	theme: {
		screens: {
			es_phone: "320px",
			sm_phone: "390px",
			md_phone: "475px",
			lg_phone: "600px",
			sm_tablet: "768px",
			md_tablet: "990px",
			lg_tablet: "1050px",
			es_desktop: "1280px",
			sm_desktop: "1366px",
			md_desktop: "1440px",
			lg_desktop: "1920px",
		},

		colors: {
			black: "#000",
			white: "#fff",

			primary: "#101010",

			gray: colors.neutral,

			danger: "#FF7E7E",
			warning: "#FFC97E",
			info: "#7EAAFF",
			success: "#7EFF9C",
		},

		fontFamily: {
			sans: [
				"var(--font-inter)",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"sans-serif",
			],
		},

		extend: {
			padding: {
				safe: "60px",
			},
			width: {
				"bento-1": "calc(25% - 24px)",
				"bento-1.5": "calc(39% - 16px)",
				"bento-2": "calc(50% - 16px)",
				"bento-3": "calc(33% - 17.4px)",
				"bento-3.5": "calc(61% - 16px)",
				"bento-4": "100%",
			},
			maxWidth: {
				painel: "1190px",
			},
		},
	},

	plugins: [
		({ addUtilities, addComponents }: PluginAPI) => {
			addUtilities({
				".wrapper": {
					maxWidth: "calc(1216px + 48px)",
					"@apply mx-auto px-6": {},
				},

				".frame": {
					"@apply h-full w-full object-cover max-w-full max-h-full":
						{},
				},
			});
			addComponents({
				".input": {
					"@apply rounded-lg bg-gray-100 p-4 text-gray-950 placeholder:text-gray-500 border-gray-300 border-solid border disabled:pointer-events-none disabled:opacity-70 w-full dark:bg-gray-900 dark:border-gray-800 dark:text-gray-50":
						{},
				},
				".pill": {
					"@apply flex w-fit cursor-default flex-row items-center gap-2 rounded-full border border-solid border-gray-300 bg-gray-100 px-2 py-1 text-gray-400 transition-colors dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300":
						{},
				},
			});
		},
	],
};
export default config;
