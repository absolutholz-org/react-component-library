import { css } from "@emotion/react";

export const animatedUnderline = css`
	/*
        The following shorthand is the equivalent of:
        background-image: linear-gradient(...);
        background-size: 300% 1px;
        background-repeat: no-repeat;
        background-position: 100% 100%;
	*/
	background: linear-gradient(
			to right,
			firebrick 0%,
			firebrick 33.3%,
			transparent 33.3%,
			transparent 66.7%,
			firebrick 66.7%,
			firebrick 100%
		)
		no-repeat 100% 100% / 300% 1px transparent;
	transition: background-position-x 600ms;

	&:hover,
	&:focus-visible {
		background-position-x: 0%;
	}
`;
