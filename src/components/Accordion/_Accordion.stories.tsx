import { Meta, StoryObj } from "@storybook/react";

import { Accordion } from ".";
import { ExpandablePanel } from "../ExpandablePanel";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Accordion",
	component: Accordion,
	parameters: { controls: { sort: "requiredFirst" } },
	argTypes: {
		onCollapse: { action: "collapsed" },
		onExpand: { action: "expanded" },
	},
} as Meta<typeof Accordion>;

type Story = StoryObj<typeof Accordion>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
	render: (args) => (
		<Accordion {...args}>
			<ExpandablePanel
				id="1"
				slotControl="1"
				onExpand={() => console.log("expanded")}
				onCollapse={() => console.log("collapsed")}
			>
				<div>Panel content 1</div>
			</ExpandablePanel>
			<ExpandablePanel
				id="2"
				slotControl="2"
				onExpand={() => console.log("expanded")}
				onCollapse={() => console.log("collapsed")}
			>
				<div>Panel content 2</div>
			</ExpandablePanel>
			<ExpandablePanel
				id="3"
				slotControl="3"
				onExpand={() => console.log("expanded")}
				onCollapse={() => console.log("collapsed")}
			>
				<div>Panel content 3</div>
			</ExpandablePanel>
		</Accordion>
	),
	args: {},
};
