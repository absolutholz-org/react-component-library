import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ButtonGroup = styled.div<{ wrap?: boolean }>`
	display: flex;
	${({ wrap = false }) =>
		wrap &&
		css`
			flex-wrap: wrap;
		`}
	gap: 0.5rem;
`;
