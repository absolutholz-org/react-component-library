import styled from 'styled-components';

import { Kind } from '../../../../enums/Kind';

export const OXFullScreenOverlay = styled.div`
    background-color: ${({ theme }) => theme[Kind.Container1]};
    height: 100%;
    width: 100%;
`;
