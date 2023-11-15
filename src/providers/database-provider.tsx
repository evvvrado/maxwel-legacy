"use client";

import React from "react";

interface DatabaseType {}

const DatabaseContext = React.createContext({} as DatabaseType);

export const DatabseProvider: React.FC<{ children: React.ReactNode }> = (
	props,
) => {
	return (
		<DatabaseContext.Provider value={{}}>
			{props.children}
		</DatabaseContext.Provider>
	);
};

export const useDatabase = () => React.useContext(DatabaseContext);
