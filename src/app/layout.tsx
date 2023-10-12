import "@/styles/css/globals.css";

import type { Metadata } from "next";

import definition from "@/constants/definition-constants";
import { SummonerProvider } from "@/providers/summoner-provider";
import ThemeProvider from "@/providers/theme-provider";
import { inter } from "@/styles/fonts";

export const metadata: Metadata = {
	title: {
		default: definition.title,
		template: `%s ${definition.resumeTitle}`,
	},

	description: definition.description,
	robots: "/robots.txt",

	openGraph: {
		type: "website",
		title: `Acessar ${definition.title}`,
		description: definition.description,
		siteName: definition.name,
		locale: "pt_BR",
		alternateLocale: "en_US",
		url: definition.url,
		countryName: "Brasil",

		images: [
			{
				url: "/cover.jpg",
				secureUrl: "/cover.jpg",
				alt: "Open Graph Visual Image",
				type: "jpg",
			},
			{
				url: "/cover.png",
				secureUrl: "/cover.png",
				alt: "Open Graph Visual Image",
				type: "png",
			},
		],
	},

	twitter: {
		title: `Acessar ${definition.title}`,
		description: definition.description,
		card: "summary_large_image",
		creator: "@evvvrado",

		images: [
			{
				url: "/cover.jpg",
				secureUrl: "/cover.jpg",
				alt: "Open Graph Visual Image",
				type: "jpg",
			},
			{
				url: "/cover.png",
				secureUrl: "/cover.png",
				alt: "Open Graph Visual Image",
				type: "png",
			},
		],
	},

	icons: [
		{
			rel: "apple-touch-icon",
			url: "/apple-touch-icon.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon-16x16.png",
		},
		{
			rel: "icon",
			url: "/favicon.ico",
		},
	],

	authors: [
		{
			name: "Everaldo Júnior",
			url: "https://twitter.com/evvvrado",
		},
		{
			name: "Insany Design",
			url: "https://insany.design",
		},
	],

	themeColor: definition.theme,
	colorScheme: "normal",
	viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
	appleWebApp: true,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			suppressHydrationWarning={true}
			className={`${inter.variable}`}
			lang="pt-BR"
		>
			<body className="grid-bg min-w-screen min-h-screen bg-gray-50 dark:bg-gray-950">
				<ThemeProvider>
					<SummonerProvider>{children}</SummonerProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
