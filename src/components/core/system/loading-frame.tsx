"user client";

import React from "react";

import { Spinner } from "@phosphor-icons/react";

import TemplateFrame from "./template-frame";

const LoadingFrame: React.FC = () => {
	return (
		<TemplateFrame>
			<Spinner size={32} className="animate-spin" />
		</TemplateFrame>
	);
};

export default LoadingFrame;
