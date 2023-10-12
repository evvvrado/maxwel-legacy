"use client";

import React from "react";

import { ThemeProvider as DefaultThemeProvider } from "next-themes";

const ThemeProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<DefaultThemeProvider attribute="class">
			{children}
		</DefaultThemeProvider>
	);
};

export default ThemeProvider;
