import { OXButtonGroup } from '../../OXButtonGroup';
import { OXOverlay } from '../_OXOverlay';
import type { IOXFullScreenOverlay } from './_IOXFullScreenOverlay';
import * as S from './_OXFullScreenOverlay.styled';

export const OXFullScreenOverlay = ({
    buttons,
    children,
    isModal = false,
    canBeClosedOnEscape,
    overlayRef,
}: IOXFullScreenOverlay): JSX.Element => {
    return (
        <OXOverlay canBeClosedOnEscape={canBeClosedOnEscape} isModal={isModal} ref={overlayRef}>
            <S.OXFullScreenOverlay>
                <header>BottomSheet header</header>
                {children}
                {buttons && <footer>{buttons && <OXButtonGroup>{buttons}</OXButtonGroup>}</footer>}
            </S.OXFullScreenOverlay>
        </OXOverlay>
    );
};
