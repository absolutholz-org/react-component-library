import { forwardRef, useImperativeHandle, useState } from "react";

import { IDetails } from "./_Details.annotations";
import * as S from "./_Details.styled";

/**
 * https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion
 * https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-accordion
 */
export const Details = forwardRef(
	(
		{
			children,
			id,
			isInitiallyOpen = false,
			onClose = () => {},
			onOpen = () => {},
			slotControl,
		}: IDetails,
		forwardedRef
	): JSX.Element => {
		const controlId = `details_control_${id}`;
		const panelId = `details_panel_${id}`;

		const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen);

		const close = () => {
			setIsOpen(false);
			onClose({ id });
		};

		const open = () => {
			setIsOpen(true);
			onOpen({ id });
		};

		const toggle = () => {
			isOpen ? close() : open();
		};

		useImperativeHandle(
			forwardedRef,
			() => ({
				close,
				open,
				toggle,
			}),
			[close, open, toggle]
		);

		return (
			<>
				<S.Details_Summary
					aria-controls={panelId}
					aria-expanded={isOpen}
					id={controlId}
					onClick={toggle}
				>
					{slotControl}
				</S.Details_Summary>
				<div
					aria-hidden={!isOpen}
					aria-labelledby={controlId}
					hidden={!isOpen}
					id={panelId}
					role="region"
				>
					{children}
				</div>
			</>
		);
	}
);
