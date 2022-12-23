import { OXButtonGroup } from '../../OXButtonGroup';
import { OXOverlay } from '../_OXOverlay';
import type { IOXBottomSheet } from './_IOXBottomSheet';
import * as S from './_OXBottomSheet.styled';

export const OXBottomSheet = ({
    buttons,
    children,
    isModal = false,
    canBeClosedOnEscape,
    overlayRef,
}: IOXBottomSheet): JSX.Element => {
    return (
        <OXOverlay canBeClosedOnEscape={canBeClosedOnEscape} isModal={isModal} ref={overlayRef}>
            <S.OXBottomSheet>
                <header>BottomSheet header</header>
                {children}
                {buttons && <footer>{buttons && <OXButtonGroup>{buttons}</OXButtonGroup>}</footer>}
            </S.OXBottomSheet>
        </OXOverlay>
    );
};
