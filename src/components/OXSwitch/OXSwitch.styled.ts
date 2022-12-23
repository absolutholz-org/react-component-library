import styled from 'styled-components';

import { focusStyles } from '../../.../../../utils/styles/focus.styles';
import { Kind } from '../../../enums/Kind';
import { OX_FULLY_ROUNDED_CORNERS } from '../../../utils/styles/borderRadius.styles';
import { rem } from '../../../utils/units';
import { elementOverlayStyles } from '../../styles/elementOverlay.styles';
import { elevateStyles } from '../../styles/elevation.styles';

const KNOB_SIZE_IN_PX = 24;
const TRACK_SPACING_IN_PX = 4;
const KNOB_TRANSITION_DURATION_IN_MS = 200;

export const _OXSwitch = styled.div`
    background-color: ${({ theme }) => theme[Kind.Tertiary]};
    ${OX_FULLY_ROUNDED_CORNERS};
    cursor: pointer;
    display: block;
    height: ${rem(KNOB_SIZE_IN_PX + TRACK_SPACING_IN_PX * 2)};
    width: ${rem(KNOB_SIZE_IN_PX * 2 + TRACK_SPACING_IN_PX * 2)};
    position: relative;
    transition: background-color 250ms 100ms;

    &::before {
        ${elevateStyles(4)}
        background-color: ${({ theme }) => theme[Kind.OnTertiary]};
        ${OX_FULLY_ROUNDED_CORNERS};
        bottom: ${rem(TRACK_SPACING_IN_PX)};
        content: '';
        display: block;
        left: ${rem(TRACK_SPACING_IN_PX)};
        position: absolute;
        right: calc(100% - ${rem(KNOB_SIZE_IN_PX + TRACK_SPACING_IN_PX)});
        top: ${rem(TRACK_SPACING_IN_PX)};
        transition: right ${KNOB_TRANSITION_DURATION_IN_MS}ms, left ${KNOB_TRANSITION_DURATION_IN_MS}ms;
    }

    &::after {
        ${elementOverlayStyles()}
        content: '';
    }

    &:hover {
        &::after {
            background-color: ${({ theme }) => theme[Kind.HoverState]};
        }
    }

    input:focus-visible + & {
        ${focusStyles()}
    }

    @supports not selector(:focus-visible) {
        input:focus {
            ${focusStyles()}
        }
    }

    &:active {
        &::before {
            right: calc(100% - ${rem(KNOB_SIZE_IN_PX + TRACK_SPACING_IN_PX + KNOB_SIZE_IN_PX / 3)});

            input:checked + & {
                left: calc(100% - ${rem(KNOB_SIZE_IN_PX + TRACK_SPACING_IN_PX + KNOB_SIZE_IN_PX / 3)});
            }
        }

        &::after {
            background-color: ${({ theme }) => theme[Kind.PressedState]};
        }
    }

    input:checked + & {
        background-color: ${({ theme }) => theme[Kind.Brand]};

        &::before {
            left: calc(100% - ${rem(KNOB_SIZE_IN_PX + TRACK_SPACING_IN_PX)});
            right: ${rem(TRACK_SPACING_IN_PX)};
        }
    }

    input:disabled + & {
        pointer-events: none;

        &::before {
            opacity: 0.6;
        }

        &::after {
            background-color: ${({ theme }) => theme[Kind.DisabledState]};
        }
    }
`;
