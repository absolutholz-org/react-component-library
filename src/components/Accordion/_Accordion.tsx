import { Children, cloneElement, createRef, RefObject } from "react";

import type { IDetailsControls } from "../Details/_Details.annotations";
import type { IAccordion } from "./_Accordion.annotations";

export function Accordion({ children }: IAccordion): JSX.Element {
	const childrenRefs: {
		id: string;
		ref: RefObject<IDetailsControls>;
	}[] = children.map((child) => {
		return {
			id: child.props.id,
			ref: createRef(),
		};
	});

	const onOpen = (id: string) => {
		childrenRefs
			.filter((childRef) => childRef.id !== id)
			.forEach(
				(childRef) =>
					childRef?.ref?.current?.close &&
					childRef.ref.current.close()
			);
	};

	return (
		<>
			{Children.map(children, (child) =>
				cloneElement(child, {
					ref: childrenRefs.find(
						(childRef) => childRef.id === child.props.id
					)?.ref,
					onOpen: ({ id }: { id: string }) => {
						onOpen(id);
						child.props.onOpen(id);
					},
				})
			)}
		</>
	);
}
