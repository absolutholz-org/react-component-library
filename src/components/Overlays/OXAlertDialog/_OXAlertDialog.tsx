import { OXButton } from '../../buttons/OXButton';
import { OXDialog } from '../OXDialog';
import type { IOXAlertDialog } from './_IOXAlertDialog';

export const OXAlertDialog = ({
    children,
    header,
    footer,
    onAcknowledge,
    textAcknowledgeButton,
    shouldCloseOnAcknowledgement = true,
    overlayRef,
}: IOXAlertDialog): JSX.Element => {
    const handleAcknowledge = () => {
        if (onAcknowledge !== undefined) {
            onAcknowledge();
        }

        if (shouldCloseOnAcknowledgement && overlayRef.current !== null) {
            overlayRef.current.close();
        }
    };

    return (
        <OXDialog
            overlayRef={overlayRef}
            buttons={
                <>
                    <OXButton inline={true} onClick={handleAcknowledge} text={textAcknowledgeButton} />
                </>
            }
            header={header}
            footer={footer}>
            {children}
        </OXDialog>
    );
};
