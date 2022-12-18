import { Children, cloneElement, createRef, RefObject } from "react";

import { IExpandablePanelControls } from "../ExpandablePanel/_ExpandablePanel.annotations";
import { IAccordion } from "./_Accordion.annotations";

export function Accordion({ children }: IAccordion): JSX.Element {
	const childrenRefs: {
		id: string;
		ref: RefObject<IExpandablePanelControls>;
	}[] = children.map((child) => {
		return {
			id: child.props.id,
			ref: createRef(),
		};
	});

	const onExpand = (id: string) => {
		console.log("expanded", { id, childrenRefs });
		childrenRefs
			.filter((childRef) => childRef.id !== id)
			.forEach(
				(childRef) =>
					childRef?.ref?.current?.collapse &&
					childRef.ref.current.collapse()
			);
	};

	return (
		<>
			{Children.map(children, (child) =>
				cloneElement(child, {
					ref: childrenRefs.find(
						(childRef) => childRef.id === child.props.id
					)?.ref,
					onExpand: ({ id }: { id: string }) => {
						onExpand(id);
						child.props.onExpand(id);
					},
				})
			)}
		</>
	);
}
