import { cloneElement, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import FocusTrap from 'focus-trap-react';
import { useEventListener } from 'web-api-hooks';

import { useBodyScrollLock } from '../../../../hooks/useBodyScrollLock';
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';
import { ConditionalWrapper } from '../../../../utils/components/ConditionalWrapper';
import { Portal } from '../../../private/Portal';
import type { IOXOverlay } from './_IOXOverlay';
import * as S from './_OXOverlay.styled';

export const OXOverlay = forwardRef(
    (
        { isModal = true, children, canBeClosedOnEscape = true, canBeClosedOnClickOutside = false }: IOXOverlay,
        forwardedRef
    ): JSX.Element => {
        const overlayRef = useRef<HTMLDivElement>(null);
        const dialogRef = useRef<HTMLDivElement>(null);
        const [isOpen, setIsOpen] = useState<boolean>(false);
        const [elementToFocusOnClose, setElementToFocusOnClose] = useState<HTMLElement | null>(null);

        const close = useCallback(() => {
            setIsOpen(false);
            if (elementToFocusOnClose) {
                elementToFocusOnClose.focus();
            }
        }, [elementToFocusOnClose]);

        const open = useCallback(() => {
            setIsOpen(true);
            setElementToFocusOnClose(document.activeElement as HTMLElement);
            setTimeout(() => dialogRef?.current?.focus(), 100);
        }, []);

        useImperativeHandle(
            forwardedRef,
            () => ({
                open,
                close,
            }),
            [close, open]
        );

        const handleEscape = useCallback(
            event => {
                if (canBeClosedOnEscape && event.keyCode === 27) {
                    close();
                }
            },
            [close, canBeClosedOnEscape]
        );
        useEventListener(document, 'keyup', handleEscape);

        useOnClickOutside(dialogRef, () => {
            canBeClosedOnClickOutside ? close() : null;
        });

        // In case Overlay isOpen and isModal lock scrolling outside of Modal
        useBodyScrollLock(overlayRef, isOpen && isModal);
        useEffect(() => {
            return () => clearAllBodyScrollLocks();
        }, []);

        return (
            <Portal>
                {isOpen && (
                    <S.OXOverlay ref={overlayRef}>
                        {isModal && <S.OXOverlay_Backdrop aria-hidden={true} />}
                        <ConditionalWrapper condition={isModal} wrapper={children => <FocusTrap>{children}</FocusTrap>}>
                            {cloneElement(children, {
                                'aria-modal': isModal,
                                ref: dialogRef,
                                role: 'dialog',
                                tabIndex: -1,
                            })}
                        </ConditionalWrapper>
                    </S.OXOverlay>
                )}
            </Portal>
        );
    }
);

OXOverlay.displayName = 'OXOverlay';
