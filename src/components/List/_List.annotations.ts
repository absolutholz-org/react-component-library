import { MenuHTMLAttributes, OlHTMLAttributes, ReactNode } from "react";

export interface IList {
	children: ReactNode[];
	className?: string;
	listType?: "ul" | "ol" | "menu";
}

export type IMenuList = MenuHTMLAttributes<HTMLMenuElement> &
	Omit<IList, "listType">;

export type IUList = Omit<IList, "listType">;

export type IOList = OlHTMLAttributes<HTMLMenuElement> &
	Omit<IList, "listType">;
