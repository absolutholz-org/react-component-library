import { ReactElement } from "react";

export interface IList {
	children: ReactElement[];
	className?: string;
	type?: "ul" | "ol" | "menu";
}
