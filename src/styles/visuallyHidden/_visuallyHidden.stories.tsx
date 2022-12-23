import styled from "@emotion/styled";
import type { Meta, StoryObj } from "@storybook/react";

import { visuallyHidden } from ".";

const TestComponent = styled.button`
	${visuallyHidden}
`;

const meta = {
	title: "styles/VisuallyHidden",
	component: TestComponent,
	// This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
	tags: ["docsPage"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
		layout: "fullscreen",
	},
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VisuallyHidden: Story = {
	render: (args) => <TestComponent>Underlined</TestComponent>,
};
