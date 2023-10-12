import * as React from "react";

import { Metadata, NextPage } from "next";

import MXWLogo from "@/components/core/brand/mxw-logo";
import LoadingFrame from "@/components/core/system/loading-frame";
import IdentifyFooter from "@/components/includes/identify/identify-footer";

export const metadata: Metadata = {
	title: "Getting ready.",
};

const Home: NextPage = () => {
	return (
		<div className="fixed inset-0 flex flex-col items-center justify-center gap-20">
			<MXWLogo />
			<LoadingFrame />

			<IdentifyFooter />
		</div>
	);
};

export default Home;
