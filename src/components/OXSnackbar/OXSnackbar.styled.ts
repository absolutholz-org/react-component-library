import styled from 'styled-components';

import { BiggerThan } from '../../../enums/BiggerThan';
import { Kind } from '../../../enums/Kind';
import { borderRadiusStyles } from '../../../utils/styles/borderRadius.styles';
import { rem } from '../../../utils/units';
import { OXIcon } from '../OXIcon';

export const _OXSnackbar_Container = styled.div`
    bottom: 0;
    gap: ${rem(16)};
    display: grid;
    left: 0;
    padding: ${rem(16)};
    position: fixed;
    width: 100%;
`;

export const _OXSnackbar = styled.div`
    ${borderRadiusStyles(12)};
    align-items: center;
    background: ${({ theme }) => theme[Kind.Canvas2]};
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: ${rem(16)};
    width: 100%;

    @media ${BiggerThan.Small} {
        max-width: ${rem(360)};
        width: auto;
    }
`;

export const _OXSnackbar_Content = styled.div`
    align-items: center;
    display: flex;
    flex-grow: 1;
`;

export const _OXSnackbar_Icon = styled(OXIcon)`
    flex-shrink: 0;
    margin-right: ${rem(8)};
`;

export const _OXSnackbar_Action = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    margin-left: ${rem(8)};
`;
