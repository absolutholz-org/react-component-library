import type { IButton } from "./_Button.annotations";

import * as S from "./_Button.styled";

export function Button({
	children,
	size = "inline",
	variant = "primary",
	...rest
}: IButton): JSX.Element {
	console.log({ rest });

	const nodeType = rest.href ? "a" : rest.type ? "button" : "span";
	const ButtonVariant =
		variant === "primary"
			? S.Button_Primary
			: variant === "secondary"
			? S.Button_Secondary
			: S.Button_Tertiary;

	return (
		<ButtonVariant {...rest} as={nodeType}>
			{children}
		</ButtonVariant>
	);
}
