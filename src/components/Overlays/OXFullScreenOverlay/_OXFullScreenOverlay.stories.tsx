import { useRef } from 'react';

import type { Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { OXButton } from '../../buttons/OXButton';
import { OXButtonLink } from '../../buttons/OXButtonLink';
import type { IOXOverlayControls } from '../_OXOverlay/_IOXOverlay';
import type { IOXFullScreenOverlay } from './_IOXFullScreenOverlay';
import { OXFullScreenOverlay } from './_OXFullScreenOverlay';

export default {
    title: 'ui/oxide-23/OXOverlays/OXFullScreenOverlay',
    component: OXFullScreenOverlay,
    decorators: [withDesign],
};

const storyName = 'OXFullScreenOverlay';
const figmaUrl = '';

const Template: Story<IOXFullScreenOverlay> = args => {
    const overlayRef = useRef<IOXOverlayControls>(null);
    const handleTriggerClick = () => {
        if (overlayRef?.current) {
            overlayRef.current.open();
        }
    };

    return (
        <>
            <OXFullScreenOverlay
                {...args}
                overlayRef={overlayRef}
                buttons={
                    <>
                        <OXButtonLink text='test' />
                        <OXButton inline={true} text='test' />
                    </>
                }>
                lorem ipsum
            </OXFullScreenOverlay>
            <button
                onClick={handleTriggerClick}
                style={{ background: 'white', padding: '0.5em 1em', position: 'relative', zIndex: 1000 }}>
                click me
            </button>
        </>
    );
};

export const _OXFullScreenOverlay_ = Template.bind({});
_OXFullScreenOverlay_.storyName = storyName;
_OXFullScreenOverlay_.args = {};

if (figmaUrl) {
    _OXFullScreenOverlay_.parameters = {
        design: {
            type: 'figma',
            url: figmaUrl,
        },
    };
}
