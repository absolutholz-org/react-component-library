export interface ISwitch {
	id: string;
	isOn?: boolean;
	isReadOnly?: boolean;
	onClick: (isOpen: boolean) => void;
}
