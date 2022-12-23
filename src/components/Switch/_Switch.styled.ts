import styled from "@emotion/styled";

const KNOB_SIZE_IN_EM = 1.5;
const TRACK_PADDING_IN_EM = 0.25;

export const Switch = styled.button`
	align-items: center;
	background-color: #666;
	border-radius: 50vmax;
	display: inline-flex;
	height: ${KNOB_SIZE_IN_EM + TRACK_PADDING_IN_EM * 2}em;
	position: relative;
	transition: background-color 300ms;
	width: ${KNOB_SIZE_IN_EM * 2 + TRACK_PADDING_IN_EM * 2}em;

	&::before {
		background-color: white;
		border-radius: 50vmax;
		bottom: ${TRACK_PADDING_IN_EM}em;
		left: ${TRACK_PADDING_IN_EM}em;
		position: absolute;
		right: calc(
			100% - ${KNOB_SIZE_IN_EM + TRACK_PADDING_IN_EM}em -
				var(--switch-grow, 0em)
		);
		top: ${TRACK_PADDING_IN_EM}em;
		transition-property: left, right;
		transition-duration: 300ms;
	}

	&:active {
		--switch-grow: ${KNOB_SIZE_IN_EM / 3}em;
	}

	&[aria-checked="true"] {
		background-color: forestgreen;

		&::before {
			left: calc(
				100% - ${KNOB_SIZE_IN_EM + TRACK_PADDING_IN_EM}em -
					var(--switch-grow, 0em)
			);
			right: ${TRACK_PADDING_IN_EM}em;
		}
	}

	&[aria-readonly="true"] {
	}
`;
