import { Meta, StoryObj } from "@storybook/react";

import { VisuallyHidden } from ".";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "components/VisuallyHidden",
	component: VisuallyHidden,
	parameters: { controls: { sort: "requiredFirst" } },
} as Meta<typeof VisuallyHidden>;

type Story = StoryObj<typeof VisuallyHidden>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const _VisuallyHidden_: Story = {
	render: (args) => <VisuallyHidden {...args} />,
	args: {
		children: "visually hidden content",
	},
};
