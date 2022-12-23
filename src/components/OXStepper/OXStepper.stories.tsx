import { action } from '@storybook/addon-actions';
import type { Story } from '@storybook/react/types-6-0';
import { useForm } from 'react-hook-form-latest';
import { withDesign } from 'storybook-addon-designs';

import { OXForm } from '../OXForm';
import type { IOXStepper } from './IOXStepper';
import { OXStepper } from './OXStepper';
import mdx from './OXStepper.mdx';

export default {
    title: 'ui/oxide-23/OXStepper',
    component: OXStepper,
    decorators: [withDesign],
    parameters: {
        docs: {
            /**
             * react-hook-form + storybook + args = circular dependency bug
             * workaround https://github.com/react-hook-form/react-hook-form/issues/4449
             */
            source: { type: 'code' },
            page: mdx,
        },
    },
    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
    },
};

const figmaUrl = 'https://www.figma.com/file/okQQDp96lewV2xgtlHGYps/OXIDE?node-id=14496%3A26496';

interface IOXStepperStory extends IOXStepper {
    value: number;
}

const Template: Story<IOXStepperStory> = args => {
    const methods = useForm({
        defaultValues: {
            [args.name]: args.value,
        },
    });

    const onFormChange = () => {
        action('')(methods.getValues());
    };

    return (
        <OXForm methods={methods} onSubmit={onFormChange}>
            <OXStepper {...args} />
        </OXForm>
    );
};

export const _AlwaysOpen_ = Template.bind({});
_AlwaysOpen_.storyName = 'Standard';
_AlwaysOpen_.args = {
    name: 'OXStepper',
    max: 10,
    min: 0,
    step: 1,
    isDisabled: false,
    labelStepDown: 'Decrease the amount by 1',
    labelStepUp: 'Increase the amount by 1',
    value: 0,
};

if (figmaUrl) {
    _AlwaysOpen_.parameters = {
        design: {
            type: 'figma',
            url: figmaUrl,
        },
    };
}

export const _CloseOnMinValue_ = Template.bind({});
_CloseOnMinValue_.storyName = 'Close on min value';
_CloseOnMinValue_.args = {
    name: 'OXStepper',
    max: 10,
    min: 0,
    step: 1,
    isDisabled: false,
    labelStepDown: 'Decrease the amount by 1',
    labelStepUp: 'Increase the amount by 1',
    closeOnMinValue: true,
    value: 0,
};

if (figmaUrl) {
    _CloseOnMinValue_.parameters = {
        design: {
            type: 'figma',
            url: figmaUrl,
        },
    };
}
