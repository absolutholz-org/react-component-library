import { ReactNode } from "react";

export interface IDetails {
	children: ReactNode;
	id: string;
	isInitiallyOpen?: boolean;
	onToggle?: (isOpen: boolean) => void;
	slotControl: ReactNode;
}

export interface IDetailsControls {
	open: (isOpen: boolean) => void;
}
