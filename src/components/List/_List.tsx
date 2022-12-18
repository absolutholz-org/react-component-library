import { Children, cloneElement } from "react";
import { IList } from "./_List.annotations";
import * as S from "./_List.styled";

export function List({ className, children, type = "ul" }: IList) {
	return (
		<S.List as={type} className={className} role="list">
			{Children.map(children, (child) =>
				cloneElement(child, {
					role: "listitem",
				})
			)}
		</S.List>
	);
}
