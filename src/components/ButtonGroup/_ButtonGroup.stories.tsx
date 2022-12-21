import { Meta, StoryObj } from "@storybook/react";

import { ButtonGroup } from ".";
import { Button } from "../Button/_Button";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "ButtonGroup",
	component: ButtonGroup,
	parameters: {
		controls: {
			sort: "requiredFirst",
			exclude: ["className"],
		},
	},
} as Meta<typeof ButtonGroup>;

type Story = StoryObj<typeof ButtonGroup>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const _AsButtonGroup_: Story = {
	render: (args) => (
		<ButtonGroup {...args}>
			<Button>Button</Button>
			<Button size="block" variant="secondary">
				Button
			</Button>
			<Button variant="tertiary">Button</Button>
		</ButtonGroup>
	),
};
