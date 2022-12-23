import type { Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { OXButton } from '../buttons/OXButton';
import type { IOXSnackbar } from './IOXSnackbar';
import { OXSnackbar } from './OXSnackbar';
import mdx from './OXSnackbar.mdx';
import { OXSnackbarProvider, useOXSnackbar } from './OXSnackbarContext';

export default {
    title: 'ui/oxide-23/OXSnackbar',
    component: OXSnackbar,
    decorators: [
        withDesign,
        (Story: Story): JSX.Element => (
            <OXSnackbarProvider>
                <Story />
            </OXSnackbarProvider>
        ),
    ],
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

const figmaUrl = 'https://www.figma.com/file/okQQDp96lewV2xgtlHGYps/OXIDE?node-id=15156%3A27285&t=uDDrAl9oeLHjoTrY-4';

const Template: Story<IOXSnackbar> = args => {
    const { addSnackbarMessage } = useOXSnackbar();

    const handleAddButtonClick = () => {
        addSnackbarMessage(args);
    };

    return <OXButton inline={true} onClick={handleAddButtonClick} text='trigger a snackbar' />;
};

export const _Snackbar = Template.bind({});
_Snackbar.args = {
    text: 'Snackbar message',
    icon: 'coronavirus',
};

if (figmaUrl) {
    _Snackbar.parameters = {
        design: {
            type: 'figma',
            url: figmaUrl,
        },
    };
}
