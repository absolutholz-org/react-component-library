import { ReactNode } from "react";

export interface IExpandablePanel {
	children: ReactNode;
	id: string;
	isInitiallyExpanded?: boolean;
	onCollapse?: ({ id }: { id: string }) => void;
	onExpand?: ({ id }: { id: string }) => void;
	slotControl: ReactNode;
}

export interface IExpandablePanelControls {
	collapse: () => void;
	expand: () => void;
}
