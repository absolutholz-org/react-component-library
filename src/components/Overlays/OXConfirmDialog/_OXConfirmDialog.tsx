import { OXButton } from '../../buttons/OXButton';
import { OXButtonLink } from '../../buttons/OXButtonLink';
import { OXDialog } from '../OXDialog';
import type { IOXConfirmDialog } from './_IOXConfirmDialog';

export const OXConfirmDialog = ({
    children,
    header,
    footer,
    onConfirm,
    onReject,
    textConfirmButton,
    textRejectButton,
    shouldCloseOnConfirmation = true,
    shouldCloseOnRejection = true,
    overlayRef,
}: IOXConfirmDialog): JSX.Element => {
    const handleConfirm = () => {
        if (onConfirm !== undefined) {
            onConfirm();
        }

        if (shouldCloseOnConfirmation && overlayRef.current !== null) {
            overlayRef?.current.close();
        }
    };

    const handleReject = () => {
        if (onReject !== undefined) {
            onReject();
        }

        if (shouldCloseOnRejection && overlayRef.current !== null) {
            overlayRef.current.close();
        }
    };

    return (
        <OXDialog
            overlayRef={overlayRef}
            buttons={
                <>
                    <OXButtonLink onClick={handleReject} text={textRejectButton} />
                    <OXButton inline={true} onClick={handleConfirm} text={textConfirmButton} />
                </>
            }
            header={header}
            footer={footer}>
            {children}
        </OXDialog>
    );
};
