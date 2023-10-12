import React from "react";

const BentoGrid: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return <div className="flex gap-8 w-100 flex-wrap pb-4">{children}</div>;
};

export default BentoGrid;
