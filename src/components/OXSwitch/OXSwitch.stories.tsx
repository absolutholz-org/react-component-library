import { action } from '@storybook/addon-actions';
import type { Story } from '@storybook/react/types-6-0';
import { useForm } from 'react-hook-form-latest';
import { withDesign } from 'storybook-addon-designs';

import { OXForm } from '../OXForm';
import type { IOXSwitch } from './IOXSwitch';
import { OXSwitch } from './OXSwitch';
import mdx from './OXSwitch.mdx';

export default {
    title: 'ui/oxide-23/OXSwitch',
    component: OXSwitch,
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
        isChecked: {
            table: {
                disable: true,
            },
        },
    },
};

const figmaUrl = 'https://www.figma.com/file/okQQDp96lewV2xgtlHGYps/OXIDE?node-id=13443%3A25155';

interface IOXSwitchStory extends IOXSwitch {
    isChecked?: 'checked';
}

const Template: Story<IOXSwitchStory> = args => {
    const methods = useForm({
        defaultValues: {
            [args.name]: args.isChecked,
        },
    });

    const onChange = () => action('Switch value change')(methods.getValues());

    return (
        <OXForm methods={methods} onChange={onChange}>
            <label htmlFor={args.id}>
                <OXSwitch {...args} />
            </label>
        </OXForm>
    );
};

export const _Unchecked_ = Template.bind({});
_Unchecked_.args = {
    id: `story-example-switch_${Math.round(Math.random() * 10000)}`,
    isDisabled: false,
    name: 'story-example-switch',
};

if (figmaUrl) {
    _Unchecked_.parameters = {
        design: {
            type: 'figma',
            url: figmaUrl,
        },
    };
}

export const _Checked_ = Template.bind({});
_Checked_.args = {
    id: `story-example-switch_${Math.round(Math.random() * 10000)}`,
    isDisabled: false,
    name: 'story-example-switch',
    isChecked: 'checked',
};

if (figmaUrl) {
    _Checked_.parameters = {
        design: {
            type: 'figma',
            url: figmaUrl,
        },
    };
}
