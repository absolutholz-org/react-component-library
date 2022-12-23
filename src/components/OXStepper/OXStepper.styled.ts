import styled, { css } from 'styled-components';

import { Kind } from '../../../enums/Kind';
import { OX_FULLY_ROUNDED_CORNERS } from '../../../utils/styles/borderRadius.styles';
import { rem } from '../../../utils/units';
import { elementOverlayStyles } from '../../styles/elementOverlay.styles';
import { elevateStyles } from '../../styles/elevation.styles';
import { CopySmallHeavyStyles } from '../../typography/oxide23/OXCopySmallHeavy/OXCopySmallHeavy';

const INPUT_WIDTH_IN_PX = 32;
const INPUT_TRANSITION_DURATION_IN_MS = 250;
const KNOB_SIZE_IN_PX = 24;
const KNOB_TRANSITION_DURATION_IN_MS = 200;
const TRACK_SPACING_IN_PX = 4;
const TRACK_TRANSITION_DURATION_IN_MS = 250;

export const _OXStepper_Knob = styled.button`
    ${elevateStyles(4)}
    background-color: ${({ theme }) => theme[Kind.OnTertiary]};
    ${OX_FULLY_ROUNDED_CORNERS};
    bottom: ${rem(TRACK_SPACING_IN_PX)};
    cursor: pointer;
    display: block;
    left: ${rem(TRACK_SPACING_IN_PX)};
    position: absolute;
    right: calc(100% - ${rem(KNOB_SIZE_IN_PX + TRACK_SPACING_IN_PX)});
    top: ${rem(TRACK_SPACING_IN_PX)};
    transition: right ${KNOB_TRANSITION_DURATION_IN_MS}ms, left ${KNOB_TRANSITION_DURATION_IN_MS}ms;

    &:disabled {
        opacity: 0.6;
    }
`;

export const _OXStepper_Decrement = styled(_OXStepper_Knob)`
    ${elevateStyles(0)}
    background: none;
`;

export const _OXStepper_Increment = styled(_OXStepper_Knob)`
    left: calc(100% - ${rem(KNOB_SIZE_IN_PX + TRACK_SPACING_IN_PX)});
    right: ${rem(TRACK_SPACING_IN_PX)};
`;

export const _OXStepper_input = styled.input`
    ${CopySmallHeavyStyles}
    appearance: textfield;
    background: none;
    border: 0;
    color: ${({ theme }) => theme[Kind.OnBrand]};
    display: inline-block;
    flex: 1;
    height: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    right: ${rem(KNOB_SIZE_IN_PX + TRACK_SPACING_IN_PX * 2)};
    text-align: center;
    top: 0;
    transition: right ${INPUT_TRANSITION_DURATION_IN_MS}ms, opacity ${INPUT_TRANSITION_DURATION_IN_MS}ms;
    width: ${rem(INPUT_WIDTH_IN_PX)};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        appearance: none;
    }

    &[readonly] {
        pointer-events: none;
    }

    &:disabled {
        opacity: 0.6;
    }
`;

interface IOXStepper {
    /** Is the entire input block disabled */
    isDisabled?: boolean;

    /** Is the input closed/collapsed, indicating that the minimum is selected */
    isClosed?: boolean;
}

export const _OXStepper = styled.div<IOXStepper>`
    background-color: ${({ theme }) => theme[Kind.Brand]};
    ${OX_FULLY_ROUNDED_CORNERS};
    height: ${rem(KNOB_SIZE_IN_PX + TRACK_SPACING_IN_PX * 2)};
    position: relative;
    transition: background-color ${TRACK_TRANSITION_DURATION_IN_MS}ms, width ${TRACK_TRANSITION_DURATION_IN_MS}ms;
    width: ${rem(KNOB_SIZE_IN_PX * 2 + INPUT_WIDTH_IN_PX + TRACK_SPACING_IN_PX * 4)};

    &::after {
        ${elementOverlayStyles()};
        pointer-events: none;
        content: '';
    }

    &:hover,
    &:focus-within {
        &::after {
            background-color: ${({ theme }) => theme[Kind.HoverState]};
        }
    }

    &:active {
        ${({ isClosed = false }) =>
            isClosed &&
            css`
                ${_OXStepper_Increment} {
                    right: calc(100% - ${rem(KNOB_SIZE_IN_PX + TRACK_SPACING_IN_PX + KNOB_SIZE_IN_PX / 3)});
                }
            `}
    }

    ${({ isClosed = false }) =>
        isClosed &&
        css`
            background-color: ${({ theme }) => theme[Kind.Tertiary]};
            cursor: pointer;
            width: ${rem(KNOB_SIZE_IN_PX * 2 + TRACK_SPACING_IN_PX * 2)};

            ${_OXStepper_Decrement} {
                opacity: 0;
            }

            ${_OXStepper_Increment} {
                left: ${rem(TRACK_SPACING_IN_PX)};
                right: calc(100% - ${rem(KNOB_SIZE_IN_PX + TRACK_SPACING_IN_PX)});

                svg {
                    opacity: 0;
                }
            }

            ${_OXStepper_input} {
                opacity: 0;
                right: 0;
            }
        `}

    ${({ isDisabled = false }) =>
        isDisabled &&
        css`
            &::after {
                background-color: ${({ theme }) => theme[Kind.DisabledState]};
            }
        `}
`;
