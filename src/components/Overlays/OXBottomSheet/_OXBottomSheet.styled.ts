import styled from 'styled-components';

import { Kind } from '../../../../enums/Kind';
import { borderRadiusStyles } from '../../../../utils/styles/borderRadius.styles';
import { rem } from '../../../../utils/units';

export const OXBottomSheet = styled.div`
    ${borderRadiusStyles(8)};
    align-self: flex-end;
    background-color: ${({ theme }) => theme[Kind.Container1]};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    max-width: ${rem(900)};
    padding: ${rem(12)};
    width: 100%;
`;
