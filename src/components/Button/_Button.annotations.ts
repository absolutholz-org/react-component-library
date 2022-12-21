import type {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	HTMLAttributes,
	ReactNode,
} from "react";
import type { ButtonSize, ButtonVariant } from "./_Button.types";

type IButtonProps = {
	children: ReactNode;
	size?: ButtonSize;
	variant?: ButtonVariant;
};

type IButtonAsHtmlSpan = IButtonProps &
	Omit<HTMLAttributes<HTMLSpanElement>, keyof IButtonProps>;

type IButtonAsHtmlButton = IButtonProps &
	Omit<
		ButtonHTMLAttributes<HTMLButtonElement>,
		keyof IButtonProps | "type"
	> & { type: "button" | "submit" | "reset" };

type IButtonAsHtmlAnchor = IButtonProps &
	Omit<
		AnchorHTMLAttributes<HTMLAnchorElement>,
		keyof IButtonProps | "href"
	> & { href: string };

export type IButton =
	| IButtonAsHtmlButton
	| IButtonAsHtmlAnchor
	| IButtonAsHtmlSpan;
