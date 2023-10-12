import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const allCookies = request.cookies.getAll();
	console.log(allCookies);
}

export const config = {
	matcher: "/:path*",
};
