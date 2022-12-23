import { VisuallyHidden } from "../VisuallyHidden";
import { ISwitch } from "./_Switch.annotations";
import * as S from "./_Switch.styled";

export function Switch({
	id,
	isOn = false,
	isReadOnly = false,
	onClick,
}: ISwitch): JSX.Element {
	const handleClick = () => {
		if (!isReadOnly) {
			onClick(isOn);
		}
	};

	return (
		<S.Switch
			aria-checked={isOn}
			aria-readonly={isReadOnly}
			id={id}
			onClick={handleClick}
			role="switch"
		>
			<VisuallyHidden>
				<span>off</span>
				<span>on</span>
			</VisuallyHidden>
		</S.Switch>
	);
}
