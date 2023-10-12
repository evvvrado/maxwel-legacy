import React from "react";

import { Metadata, NextPage } from "next";

import MXWLogo from "@/components/core/brand/mxw-logo";
import IdentifyFooter from "@/components/includes/identify/identify-footer";
import IdentifyForm from "@/components/includes/identify/identify-form";

export const metadata: Metadata = {
	title: "Identify",
};

const Identify: NextPage = () => {
	return (
		<main className="p-8">
			<MXWLogo size={55} className="text-gray-900 dark:text-gray-50" />
			<IdentifyForm />
			<IdentifyFooter />
		</main>
	);
};

export default Identify;
