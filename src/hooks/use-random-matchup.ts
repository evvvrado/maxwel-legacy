import React from "react";

export const useRandomMatchup = () => {
	const [shuffleTimes, setShuffleTimes] = React.useState(1);
	const [isLoading, setIsLoading] = React.useState(false);
	const incrementShuffle = () => setShuffleTimes(shuffleTimes + 1);

	React.useEffect(() => {
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
		}, 1000 * 5);
	}, [shuffleTimes]);

	return {
		isLoading,
		setIsLoading,
		shuffleTimes,
		incrementShuffle,
	};
};
