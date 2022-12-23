import { Meta, StoryObj } from "@storybook/react";

import { List } from "./_List";
import { MenuList, OList, UList } from ".";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "components/List",
	component: List,
	parameters: {
		controls: { sort: "requiredFirst", exclude: ["className", "listType"] },
	},
} as Meta<typeof List>;

type Story = StoryObj<typeof List>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const _MenuList_: Story = {
	render: (args) => (
		<MenuList {...args}>
			<div>
				Cambrian explosion emerged into consciousness cosmic fugue a
				still more glorious dawn awaits two ghostly white figures in
				coveralls and helmets are softly dancing science.
			</div>
			<div>
				Hearts of the stars muse about preserve and cherish that pale
				blue dot courage of our questions preserve and cherish that pale
				blue dot concept of the number one.
			</div>
			<div>
				Rings of Uranus bits of moving fluff network of wormholes with
				pretty stories for which there's little good evidence Flatland
				bits of moving fluff.
			</div>
		</MenuList>
	),
};

export const _OrderedList_: Story = {
	render: (args) => (
		<OList {...args}>
			<div>
				Cambrian explosion emerged into consciousness cosmic fugue a
				still more glorious dawn awaits two ghostly white figures in
				coveralls and helmets are softly dancing science.
			</div>
			<div>
				Hearts of the stars muse about preserve and cherish that pale
				blue dot courage of our questions preserve and cherish that pale
				blue dot concept of the number one.
			</div>
			<div>
				Rings of Uranus bits of moving fluff network of wormholes with
				pretty stories for which there's little good evidence Flatland
				bits of moving fluff.
			</div>
		</OList>
	),
};

export const _UnorderedList_: Story = {
	render: (args) => (
		<UList {...args}>
			<div>
				Cambrian explosion emerged into consciousness cosmic fugue a
				still more glorious dawn awaits two ghostly white figures in
				coveralls and helmets are softly dancing science.
			</div>
			<div>
				Hearts of the stars muse about preserve and cherish that pale
				blue dot courage of our questions preserve and cherish that pale
				blue dot concept of the number one.
			</div>
			<div>
				Rings of Uranus bits of moving fluff network of wormholes with
				pretty stories for which there's little good evidence Flatland
				bits of moving fluff.
			</div>
		</UList>
	),
};
