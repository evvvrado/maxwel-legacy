import React from "react";

import Link from "next/link";

import ThemeButton from "@/components/layout/theme-button";

const IdentifyFooter: React.FC = () => {
	return (
		<footer className="max-w-xl py-2 m-auto fixed bottom-2 left-0 right-0 w-full">
			<p className="block mb-8 text-center text-xs leading-normal text-gray-600 dark:text-gray-300">
				This platform is focused on delivering an improved Custom Game
				experience to you. It provides tools for team generation and
				balance, and while identification isn&apos;t mandatory, using
				Maxuel can elevate your experience even further.
			</p>

			<div className=" flex flex-row items-center justify-between">
				<div className="w-full">
					<ThemeButton />
				</div>

				<p className="block w-full text-center text-xs leading-normal text-gray-600 dark:text-gray-300">
					All your data is <strong>saved locally</strong> in your
					machine.
				</p>

				<span className="text-xs w-full block text-gray-400  text-right">
					{process.env.NEXT_PUBLIC_VERSION}v @
					<Link
						href={"https://x.com/evvvrado"}
						target="_blank"
						className="font-bold text-gray-950 dark:text-gray-50"
					>
						{" "}
						evvvrado
					</Link>
				</span>
			</div>
		</footer>
	);
};

export default IdentifyFooter;
