import type { IButtonGroup } from "./_ButtonGroup.annotations";
import * as S from "./_ButtonGroup.styled";

export function ButtonGroup({ children }: IButtonGroup): JSX.Element {
	return <S.ButtonGroup>{children}</S.ButtonGroup>;
}
