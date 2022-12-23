import styled from 'styled-components';

export const OXOverlay = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
`;

export const OXOverlay_Backdrop = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: -1;
`;

export const OXOverlay_Dialog = styled.div`
    max-height: 100%;
`;
