import type { ReactNode, RefObject } from 'react';

import type { IOXOverlay, IOXOverlayControls } from '../_OXOverlay/_IOXOverlay';

export interface IOXDialog extends Omit<IOXOverlay, 'children'> {
    children: ReactNode;
    header?: string;
    footer?: ReactNode;
    buttons?: ReactNode;
    overlayRef: RefObject<IOXOverlayControls>;
}
