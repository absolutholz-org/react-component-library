import styled from 'styled-components';

import { Kind } from '../../../../enums/Kind';
import { borderRadiusStyles } from '../../../../utils/styles/borderRadius.styles';
import { rem } from '../../../../utils/units';

export const OXDialog = styled.div`
    background-color: ${({ theme }) => theme[Kind.Container1]};
    ${borderRadiusStyles(8)};
    max-width: ${rem(900)};
    min-width: min(${rem(600)}, calc(100% - ${rem(32)}));
    padding: ${rem(12)};
`;

export const OXDialog_Header = styled.div`
    margin-bottom: ${rem(16)};
`;

export const OXDialog_Footer = styled.div`
    margin-top: ${rem(16)};

    &::before {
        border-top: 1px solid ${({ theme }) => theme[Kind.Secondary]};
        content: '';
        display: block;
        margin-left: ${rem(-8)};
        margin-bottom: ${rem(12)};
        width: calc(100% + ${rem(16)});
    }
`;
