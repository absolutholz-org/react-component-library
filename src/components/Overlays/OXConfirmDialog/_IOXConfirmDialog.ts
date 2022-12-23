import type { IOXDialog } from '../OXDialog/_IOXDialog';

export interface IOXConfirmDialog extends IOXDialog {
    onConfirm?: () => void;
    onReject?: () => void;
    textConfirmButton: string;
    textRejectButton: string;
    shouldCloseOnConfirmation?: boolean;
    shouldCloseOnRejection?: boolean;
}
