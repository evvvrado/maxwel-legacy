import React from "react";

import { POSITION_ROLES } from "@/constants/champions-constants";

type RoleIconProps = {
	role: keyof typeof POSITION_ROLES;
	color?: string;
	size?: number;
};

const RoleIcon: React.FC<RoleIconProps> = ({
	role = "mid",
	color = "currentColor",
	size = 15,
}) => {
	const TopIcon = () => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 15 15"
				version="1.1"
			>
				<g
					id="Design"
					stroke="none"
					strokeWidth="1"
					fill="none"
					fillRule="evenodd"
				>
					<g id="top" fill={color}>
						<polygon
							id="Fill-4-Copy"
							fillOpacity="0.27"
							points="5.5 9.5 9.5 9.5 9.5 5.5 5.5 5.5"
						/>
						<polygon
							id="Fill-1-Copy-2"
							fillOpacity="0.27"
							transform="translate(8.086057, 8.086057) rotate(-180.000000) translate(-8.086057, -8.086057) "
							points="1.17211385 1.17211385 1.17211385 15 3.82360025 12.3485136 3.82360025 3.82360025 12.3486755 3.82360025 15 1.17211385"
						/>
						<polygon
							id="Fill-1-Copy"
							points="0 0 0 13.8278861 2.6514864 11.1763997 2.6514864 2.6514864 11.1765617 2.6514864 13.8278861 0"
						/>
					</g>
				</g>
			</svg>
		);
	};

	const JungleIcon = () => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 15 15"
				version="1.1"
			>
				<g
					id="Design"
					stroke="none"
					strokeWidth="1"
					fill="none"
					fillRule="evenodd"
				>
					<path
						d="M2.71609014,10.7362903 C2.71609014,10.7362903 3.16877183,6.78080645 -1.02939879e-12,4.16080645 C-1.02939879e-12,4.16080645 4.30047606,6.01016129 5.20583944,8.88693548 C5.20583944,8.88693548 6.22437324,4.77741935 2.88593461,0 C2.88593461,0 10.920857,8.37322581 7.69541108,15 C7.69541108,15 5.43218029,12.0717742 2.71609014,10.7362903 Z M8.87663847,8.83564516 C8.87663847,8.83564516 8.25428997,6.47258065 7.74493424,5.90758065 C7.74493424,5.90758065 9.83867589,1.84935484 11.8190695,-1.0125234e-13 C11.8190695,-1.0125234e-13 9.32932016,4.31516129 9.555661,7.5 C9.555661,7.5 9.04648293,8.21919355 8.87663847,8.83564516 Z M9.6811678,12.3287097 C9.6811678,12.3287097 9.90750864,6.11290323 15,3.75 C15,3.75 11.7747318,6.6266129 12.3405839,10.171129 C12.3405839,10.171129 10.0771754,11.5067742 9.6811678,12.3287097 Z"
						id="jungle"
						fill={color}
					/>
				</g>
			</svg>
		);
	};

	const MidIcon = () => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 15 15"
				version="1.1"
			>
				<g
					id="Design"
					stroke="none"
					strokeWidth="1"
					fill="none"
					fillRule="evenodd"
				>
					<g id="mid" fill={color}>
						<polygon
							id="Fill-1"
							fillOpacity="0.27"
							points="7.78573561 2.6514864 10.437222 0 0 0 0 10.437222 2.6514864 7.78573561 2.6514864 2.6514864"
						/>
						<polygon
							id="Fill-1-Copy-3"
							fillOpacity="0.27"
							transform="translate(9.781389, 9.781389) rotate(-180.000000) translate(-9.781389, -9.781389) "
							points="12.3485136 7.21426439 15 4.56277799 4.56277799 4.56277799 4.56277799 15 7.21426439 12.3485136 7.21426439 7.21426439"
						/>
						<polygon
							id="Fill-7"
							points="12.53578 0 0 12.5356187 0 15.0001613 2.46438134 15.0001613 15 2.46454263 15 0"
						/>
					</g>
				</g>
			</svg>
		);
	};

	const AdcIcon = () => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 15 15"
				version="1.1"
			>
				<g
					id="Design"
					stroke="none"
					strokeWidth="1"
					fill="none"
					fillRule="evenodd"
				>
					<g
						id="bot"
						transform="translate(7.500000, 7.500000) scale(-1, -1) translate(-7.500000, -7.500000) "
						fill={color}
					>
						<polygon
							id="Fill-4-Copy"
							fillOpacity="0.27"
							points="5.5 9.5 9.5 9.5 9.5 5.5 5.5 5.5"
						/>
						<polygon
							id="Fill-1-Copy-2"
							fillOpacity="0.27"
							transform="translate(8.086057, 8.086057) rotate(-180.000000) translate(-8.086057, -8.086057) "
							points="1.17211385 1.17211385 1.17211385 15 3.82360025 12.3485136 3.82360025 3.82360025 12.3486755 3.82360025 15 1.17211385"
						/>
						<polygon
							id="Fill-1-Copy"
							points="0 0 0 13.8278861 2.6514864 11.1763997 2.6514864 2.6514864 11.1765617 2.6514864 13.8278861 0"
						/>
					</g>
				</g>
			</svg>
		);
	};

	const SupIcon = () => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 15 15"
				version="1.1"
			>
				<g
					id="Design"
					stroke="none"
					strokeWidth="1"
					fill="none"
					fillRule="evenodd"
				>
					<path
						d="M7.5,5.85800679 L7.90227048,5.31647306 L9.5,13.3926698 L7.5,15 L5.5,13.3926698 L7.09772952,5.31647306 L7.5,5.85800679 Z M5.62727217,3.15303339e-14 L9.37272783,3.15303339e-14 L10,1.11066873 L7.5,4.17796095 L5,1.11066873 L5.62727217,3.15303339e-14 Z M15,3.18988384 C14.715329,5.5322795 11.1386044,5.31001663 11.1386044,5.31001663 L12.7799476,7.48050963 L10.1439232,8.54049532 L9,4.90616644 L10.7407319,3.18988384 L15,3.18988384 Z M4.25926808,3.18988384 L6,4.90616644 L4.85607684,8.54049532 L2.22005239,7.48050963 L3.86139557,5.31001663 C3.86139557,5.31001663 0.284670953,5.5322795 0,3.18988384 L4.25926808,3.18988384 Z"
						id="support"
						fill={color}
					/>
				</g>
			</svg>
		);
	};

	switch (role) {
		case "top":
			return <TopIcon />;
		case "jungle":
			return <JungleIcon />;
		case "mid":
			return <MidIcon />;
		case "adc":
			return <AdcIcon />;
		case "sup":
			return <SupIcon />;
	}
};

export default RoleIcon;
