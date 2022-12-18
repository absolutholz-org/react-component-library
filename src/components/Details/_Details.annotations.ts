import { ReactNode } from "react";

export interface IDetails {
	children: ReactNode;
	id: string;
	isInitiallyOpen?: boolean;
	onClose?: ({ id }: { id: string }) => void;
	onOpen?: ({ id }: { id: string }) => void;
	slotControl: ReactNode;
}

export interface IDetailsControls {
	close: () => void;
	open: () => void;
	toggle: () => void;
}
