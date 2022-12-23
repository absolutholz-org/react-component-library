import { Meta, StoryObj } from "@storybook/react";

import { Switch } from ".";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "components/Switch",
	component: Switch,
	parameters: { controls: { sort: "requiredFirst" } },
	argTypes: {
		onClick: { action: "clicked" }, // checkout out @storybook/client-api useArgs hook
	},
} as Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const _Switch_: Story = {
	render: (args) => <Switch {...args} />,
	args: {
		id: "story",
	},
};
