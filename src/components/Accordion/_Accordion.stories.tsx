import { Meta, StoryObj } from "@storybook/react";

import { Accordion } from ".";
import { Details } from "../Details";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "components/Accordion",
	component: Accordion,
	parameters: { controls: { sort: "requiredFirst" } },
} as Meta<typeof Accordion>;

type Story = StoryObj<typeof Accordion>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const _Accordion_: Story = {
	render: (args) => (
		<Accordion {...args}>
			<Details
				id="1"
				slotControl="1"
				onOpen={() => console.log("opened")}
				onClose={() => console.log("closed")}
			>
				<div>Panel content 1</div>
			</Details>
			<Details
				id="2"
				slotControl="2"
				onOpen={() => console.log("opened")}
				onClose={() => console.log("closed")}
			>
				<div>Panel content 2</div>
			</Details>
			<Details
				id="3"
				slotControl="3"
				onOpen={() => console.log("opened")}
				onClose={() => console.log("closed")}
			>
				<div>Panel content 3</div>
			</Details>
		</Accordion>
	),
	args: {},
};
