import { useRef } from 'react';

import { action } from '@storybook/addon-actions';
import type { Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import type { IOXOverlayControls } from '../_OXOverlay/_IOXOverlay';
import type { IOXAlertDialog } from './_IOXAlertDialog';
import { OXAlertDialog } from './_OXAlertDialog';

export default {
    title: 'ui/oxide-23/OXOverlays/OXAlertDialog',
    component: OXAlertDialog,
    decorators: [withDesign],
};

const storyName = 'OXAlertDialog';
const figmaUrl = '';

const Template: Story<IOXAlertDialog> = args => {
    const dialogRef = useRef<IOXOverlayControls>(null);
    const handleTriggerClick = () => {
        if (dialogRef?.current) {
            dialogRef.current.open();
        }
    };

    return (
        <>
            <OXAlertDialog {...args} overlayRef={dialogRef}>
                lorem ipsum
            </OXAlertDialog>
            <button
                onClick={handleTriggerClick}
                style={{ background: 'white', padding: '0.5em 1em', position: 'relative', zIndex: 1000 }}>
                click me
            </button>
        </>
    );
};

export const _OXAlertDialog_ = Template.bind({});
_OXAlertDialog_.storyName = storyName;
_OXAlertDialog_.args = {
    textAcknowledgeButton: 'ok',
    onAcknowledge: () => {
        action('alert acknowledged')();
    },
};

if (figmaUrl) {
    _OXAlertDialog_.parameters = {
        design: {
            type: 'figma',
            url: figmaUrl,
        },
    };
}
