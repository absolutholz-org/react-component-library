export interface IOXOverlay {
    children: JSX.Element;

    isModal?: boolean;

    canBeClosedOnEscape?: boolean;

    canBeClosedOnClickOutside?: boolean;
}

export interface IOXOverlayControls {
    close: () => void;

    open: (elementToFocusOnClose?: HTMLElement) => void;
}
