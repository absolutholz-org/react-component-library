import { useRef } from 'react';

import type { Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { OXButton } from '../../buttons/OXButton';
import { OXButtonLink } from '../../buttons/OXButtonLink';
import type { IOXOverlayControls } from '../_OXOverlay/_IOXOverlay';
import type { IOXBottomSheet } from './_IOXBottomSheet';
import { OXBottomSheet } from './_OXBottomSheet';

export default {
    title: 'ui/oxide-23/OXOverlays/OXBottomSheet',
    component: OXBottomSheet,
    decorators: [withDesign],
};

const storyName = 'OXBottomSheet';
const figmaUrl = '';

const Template: Story<IOXBottomSheet> = args => {
    const overlayRef = useRef<IOXOverlayControls>(null);
    const handleTriggerClick = () => {
        if (overlayRef?.current) {
            overlayRef.current.open();
        }
    };

    return (
        <>
            <OXBottomSheet
                {...args}
                overlayRef={overlayRef}
                buttons={
                    <>
                        <OXButtonLink text='test' />
                        <OXButton inline={true} text='test' />
                    </>
                }>
                lorem ipsum
            </OXBottomSheet>
            <button
                onClick={handleTriggerClick}
                style={{ background: 'white', padding: '0.5em 1em', position: 'relative', zIndex: 1000 }}>
                click me
            </button>
        </>
    );
};

export const _OXBottomSheet_ = Template.bind({});
_OXBottomSheet_.storyName = storyName;
_OXBottomSheet_.args = {};

if (figmaUrl) {
    _OXBottomSheet_.parameters = {
        design: {
            type: 'figma',
            url: figmaUrl,
        },
    };
}
