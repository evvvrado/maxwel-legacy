import React from "react";

import * as Form from "@/components/core/system/form";

import { useTagInput } from "./root";

const Error: React.FC = () => {
	const { errorMessage } = useTagInput();

	if (!errorMessage) return;

	return (
		<Form.Info className="mr-auto mt-4 text-danger">
			{errorMessage}
		</Form.Info>
	);
};

export default Error;
