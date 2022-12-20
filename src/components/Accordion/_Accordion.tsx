import { Children, cloneElement, createRef, RefObject } from "react";

import type { IDetailsControls } from "../Details/_Details.annotations";
import type { IAccordion } from "./_Accordion.annotations";

/**
 * https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion
 * https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-accordion
 */
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
					childRef?.ref?.current?.open &&
					childRef.ref.current.open(false)
			);
	};

	return (
		<>
			{Children.map(children, (child) =>
				cloneElement(child, {
					ref: childrenRefs.find(
						(childRef) => childRef.id === child.props.id
					)?.ref,
					onToggle: (isOpen: boolean) => {
						if (isOpen) {
							onOpen(child.props.id);
						}
					},
				})
			)}
		</>
	);
}
