"use client";

import React from "react";

import { Spinner } from "@phosphor-icons/react";

const LoadingFrame: React.FC = () => {
	return <Spinner size={48} className="animate-spin" />;
};

export default LoadingFrame;
