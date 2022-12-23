import type { IOXDialog } from '../OXDialog/_IOXDialog';

export interface IOXAlertDialog extends IOXDialog {
    onAcknowledge: () => void;
    textAcknowledgeButton: string;
    shouldCloseOnAcknowledgement?: boolean;
}
