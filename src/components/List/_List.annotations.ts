import { ReactNode } from "react";

export interface IList {
	children: ReactNode[];
	className?: string;
	type?: "ul" | "ol" | "menu";
}
