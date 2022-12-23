import { useRef } from 'react';

import { action } from '@storybook/addon-actions';
import type { Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import type { IOXOverlayControls } from '../_OXOverlay/_IOXOverlay';
import type { IOXConfirmDialog } from './_IOXConfirmDialog';
import { OXConfirmDialog } from './_OXConfirmDialog';

export default {
    title: 'ui/oxide-23/OXOverlays/OXConfirmDialog',
    component: OXConfirmDialog,
    decorators: [withDesign],
};

const storyName = 'OXConfirmDialog';
const figmaUrl = '';

const Template: Story<IOXConfirmDialog> = args => {
    const overlayRef = useRef<IOXOverlayControls>(null);
    const handleTriggerClick = () => {
        if (overlayRef?.current) {
            overlayRef.current.open();
        }
    };

    return (
        <>
            <OXConfirmDialog {...args} overlayRef={overlayRef}>
                lorem ipsum
            </OXConfirmDialog>
            <button
                onClick={handleTriggerClick}
                style={{ background: 'white', padding: '0.5em 1em', position: 'relative', zIndex: 1000 }}>
                click me
            </button>
        </>
    );
};

export const _OXConfirmDialog_ = Template.bind({});
_OXConfirmDialog_.storyName = storyName;
_OXConfirmDialog_.args = {
    textConfirmButton: 'ok',
    textRejectButton: 'cancel',
    onConfirm: () => {
        action('decision confirmed')();
    },
    onReject: () => {
        action('decision rejected')();
    },
};

if (figmaUrl) {
    _OXConfirmDialog_.parameters = {
        design: {
            type: 'figma',
            url: figmaUrl,
        },
    };
}
