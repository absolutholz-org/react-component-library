import { useRef } from 'react';

import type { Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { OXButton } from '../../buttons/OXButton';
import { OXButtonLink } from '../../buttons/OXButtonLink';
import type { IOXOverlayControls } from '../_OXOverlay/_IOXOverlay';
import type { IOXDialog } from './_IOXDialog';
import { OXDialog } from './_OXDialog';

export default {
    title: 'ui/oxide-23/OXOverlays/OXDialog',
    component: OXDialog,
    decorators: [withDesign],
};

const storyName = 'OXDialog';
const figmaUrl = '';

const Template: Story<IOXDialog> = args => {
    const overlayRef = useRef<IOXOverlayControls>(null);
    const handleTriggerClick = () => {
        if (overlayRef?.current) {
            overlayRef.current.open();
        }
    };

    return (
        <>
            <OXDialog
                {...args}
                overlayRef={overlayRef}
                buttons={
                    <>
                        <OXButtonLink text='test' />
                        <OXButton inline={true} text='test' />
                    </>
                }>
                <div>lorem ipsum</div>
            </OXDialog>
            <button
                onClick={handleTriggerClick}
                style={{ background: 'white', padding: '0.5em 1em', position: 'relative', zIndex: 1000 }}>
                click me
            </button>
        </>
    );
};

export const _OXDialog_ = Template.bind({});
_OXDialog_.storyName = storyName;
_OXDialog_.args = {};

if (figmaUrl) {
    _OXDialog_.parameters = {
        design: {
            type: 'figma',
            url: figmaUrl,
        },
    };
}
