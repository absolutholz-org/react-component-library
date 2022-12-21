import { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Button",
	component: Button,
	parameters: {
		controls: {
			sort: "requiredFirst",
			exclude: ["className"],
		},
	},
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const _AsButton_: Story = {
	render: (args) => <Button {...args} />,
	args: {
		children: "Button",
		type: "button",
		variant: "primary",
		size: "inline",
	},
};

export const _AsAnchor_: Story = {
	render: (args) => <Button {...args} />,
	args: {
		children: "Button",
		href: "#",
	},
};

export const _AsSpan_: Story = {
	render: (args) => <Button {...args} />,
	args: {
		children: "Button",
	},
};
