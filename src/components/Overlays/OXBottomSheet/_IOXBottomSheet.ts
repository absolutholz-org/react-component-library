import type { ReactNode, RefObject } from 'react';

import type { IOXOverlay, IOXOverlayControls } from '../_OXOverlay/_IOXOverlay';

export interface IOXBottomSheet extends Omit<IOXOverlay, 'children'> {
    children: ReactNode;
    buttons?: ReactNode;
    overlayRef: RefObject<IOXOverlayControls>;
}
