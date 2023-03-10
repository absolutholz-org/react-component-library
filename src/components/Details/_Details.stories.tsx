import { Meta, StoryObj } from "@storybook/react";

import { Details } from ".";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "components/Details",
	component: Details,
	parameters: { controls: { sort: "requiredFirst" } },
	argTypes: {
		onToggle: { action: "toggled" },
	},
} as Meta<typeof Details>;

type Story = StoryObj<typeof Details>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const _Details_: Story = {
	render: (args) => <Details {...args} />,
	args: {
		children:
			"Cambrian explosion emerged into consciousness cosmic fugue a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are softly dancing science. Hearts of the stars muse about preserve and cherish that pale blue dot courage of our questions preserve and cherish that pale blue dot concept of the number one. Rings of Uranus bits of moving fluff network of wormholes with pretty stories for which there's little good evidence Flatland bits of moving fluff.",
		id: "story",
		slotControl: "Cosmic ocean hearts of the stars light",
	},
};
