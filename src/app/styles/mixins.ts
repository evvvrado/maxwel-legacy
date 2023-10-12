import { twMerge } from "tailwind-merge";

const z_indexes = ["modals", "header", "element", "content"];

type zIndexes = (typeof z_indexes)[number];

export const z = (name: zIndexes) => {
	const index = z_indexes.findIndex((item) => item == name) + 1;
	if (!index) return;
	return z_indexes.length - index;
};

export const cn = (...classNames: (string | undefined)[]) => {
	return twMerge(...classNames);
};
