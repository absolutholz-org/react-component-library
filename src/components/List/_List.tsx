import { Children, cloneElement } from "react";
import { IList } from "./_List.annotations";
import * as S from "./_List.styled";

export function List({ className, children, listType = "ul" }: IList) {
	return (
		<S.List as={listType} className={className} role="list">
			{Children.map(children, (child) => (
				<li role="listitem">{child}</li>
			))}
		</S.List>
	);
}
