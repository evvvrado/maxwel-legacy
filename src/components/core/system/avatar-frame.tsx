import React from "react";

import Image from "next/image";

import { cn } from "@/app/styles/mixins";

const avatarSizes = {
	sm: "w-8 h-8",
	md: "w-16 h-16",
	lg: "w-32 h-32",
};

const imageSizes = {
	sm: 32,
	md: 64,
	lg: 128,
};

type AvatarProps = {
	title: string | undefined;
	src: string;
	size: keyof typeof avatarSizes;
	className?: string;
	loading?: boolean;
};

const AvatarFrame: React.FC<AvatarProps> = ({
	title = "Unset",
	loading = false,
	src,
	size,
	className,
}) => {
	return (
		<picture
			className={cn(
				"relative block aspect-square overflow-hidden rounded-full border border-solid border-white/40 dark:border-black/40",
				avatarSizes[size],
				className,
			)}
		>
			{loading ? (
				<div className="absolute w-full h-full bg-gray-300 dark:bg-gray-800 animate-pulse" />
			) : (
				<Image
					alt={`${title}'s avatar.`}
					src={src}
					width={imageSizes[size]}
					height={imageSizes[size]}
					className="frame"
					quality={70}
				/>
			)}
		</picture>
	);
};

export default AvatarFrame;
