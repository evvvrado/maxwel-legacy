import React from "react";

import Link from "next/link";

import { GithubLogo, SignOut } from "@phosphor-icons/react";

import { useSummoner } from "@/providers/summoner-provider";

import MXWLogo from "../core/brand/mxw-logo";
import AvatarFrame from "../core/system/avatar-frame";
import ThemeButton from "./theme-button";

const Header: React.FC = () => {
	const { isSummonerLoading, summonerInfo, leaveSummoner } = useSummoner();

	return (
		<header className="fixed w-full inset-0 max-h-fit py-3 px-safe bg-gray-50 z-6 border-b border-solid border-b-gray-300 flex items-center dark:bg-gray-950 dark:border-gray-800">
			<div className="w-full">
				<MXWLogo size={32} />
			</div>

			<div className="w-full flex items-center justify-center gap-4 pointer-events-none select-none ">
				<h2 className="text-gray-950 align-middle dark:text-gray-50">
					Hello,{" "}
					{isSummonerLoading ? (
						<span className="inline-block bg-gray-300 dark:bg-gray-900 animate-pulse w-16 h-5 rounded relative top-1" />
					) : (
						<strong>{summonerInfo?.name || "Unknown"}.</strong>
					)}
				</h2>

				<AvatarFrame
					title={summonerInfo?.name}
					src={`http://ddragon.leagueoflegends.com/cdn/13.18.1/img/profileicon/${
						summonerInfo?.profileIconId || 1
					}.png`}
					loading={isSummonerLoading}
					size="sm"
				/>
			</div>
			<div className="w-full flex gap-4 items-center justify-end">
				<p className="block text-xs leading-normal text-gray-600 dark:text-gray-300">
					All your data is <strong>saved locally</strong> in your
					machine.
				</p>

				<hr className="h-8 w-[1px] bg-gray-300 dark:bg-gray-800 border-none " />

				<div className="flex gap-4 items-center justify-center">
					<Link
						href={"https://discord.gg/zhSTDSe2Jh"}
						target="_blank"
						aria-label="Get Support Help."
						className="px-3 py-1 rounded-lg border border-solid border-gray-300 bg-gray-50 text-sm text-gray-600 font-semibold hover:bg-gray-200 transition-colors dark:bg-gray-950 dark:hover:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
					>
						Help
					</Link>
					<Link
						href={"https://github.com/evvvrado/maxwel"}
						target="_blank"
						aria-label="Access Github."
						className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-900"
					>
						<GithubLogo size={16} />
					</Link>
					<ThemeButton />
					<button
						onClick={leaveSummoner}
						className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-900  dark:hover:bg-gray-900 text-danger"
					>
						<SignOut size={16} />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
