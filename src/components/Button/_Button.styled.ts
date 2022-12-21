import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ButtonSize, ButtonVariant } from "./_Button.types";

function getVariantCss(variant: ButtonVariant) {
	switch (variant) {
		case "secondary":
			return css`
				background: firebrick;
			`;
		case "tertiary":
			return css`
				background: forestgreen;
			`;
		default:
			return css`
				background: chocolate;
			`;
	}
}

const DEFAULT_SIZE = "inline";

export const Button = styled.span<{ size?: ButtonSize }>`
	align-items: center;
	border-radius: 0.5rem / 50%;
	display: ${({ size = DEFAULT_SIZE }) =>
		size === DEFAULT_SIZE ? "inline-flex" : "flex"};
	line-height: 1;
	justify-content: center;
	min-height: 2.5rem;
	padding: 0 1rem;
	text-align: center;
	${({ size = DEFAULT_SIZE }) =>
		size === "block" &&
		css`
			width: 100%;
		`};
`;

export const Button_Primary = styled(Button)`
	background: chocolate;
`;

export const Button_Secondary = styled(Button)`
	background: firebrick;
`;

export const Button_Tertiary = styled(Button)`
	background: forestgreen;
`;
