import { OXButtonGroup } from '../../OXButtonGroup';
import { OXOverlay } from '../_OXOverlay';
import type { IOXDialog } from './_IOXDialog';
import * as S from './_OXDialog.styled';

export const OXDialog = ({
    children,
    header,
    footer,
    isModal = true,
    canBeClosedOnEscape,
    buttons,
    overlayRef,
}: IOXDialog): JSX.Element => {
    return (
        <OXOverlay canBeClosedOnEscape={canBeClosedOnEscape} isModal={isModal} ref={overlayRef}>
            <S.OXDialog>
                {header && <S.OXDialog_Header>{header}</S.OXDialog_Header>}
                {children}
                {(footer || buttons) && (
                    <S.OXDialog_Footer>
                        {footer}
                        {buttons && <OXButtonGroup>{buttons}</OXButtonGroup>}
                    </S.OXDialog_Footer>
                )}
            </S.OXDialog>
        </OXOverlay>
    );
};
