import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ButtonVariant } from "./_Button.types";

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

export const Button = styled.span`
	align-items: center;
	border-radius: 0.5rem / 50%;
	display: inline-flex;
	line-height: 1;
	min-height: 2.5rem;
	padding: 0 1rem;
	text-align: center;
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
