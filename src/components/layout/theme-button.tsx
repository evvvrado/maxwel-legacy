"use client";

import React from "react";

import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

const ThemeButton: React.FC = () => {
	const { resolvedTheme, setTheme } = useTheme();

	const handleTheme = () => {
		if (resolvedTheme == "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<button
			onClick={handleTheme}
			aria-label="Toggle Theme."
			className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-900"
		>
			<Moon className="dark:hidden" size={16} />
			<Sun className="hidden dark:block" size={16} />
		</button>
	);
};

export default ThemeButton;
