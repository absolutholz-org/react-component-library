import type { Ref } from "react";
import { forwardRef, useImperativeHandle, useState } from "react";

import type { IDetails, IDetailsControls } from "./_Details.annotations";
import * as S from "./_Details.styled";

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
 */
export const Details = forwardRef(
	(
		{
			children,
			id,
			isInitiallyOpen = false,
			onToggle = () => {},
			slotControl,
		}: IDetails,
		forwardedRef: Ref<IDetailsControls>
	): JSX.Element => {
		const controlId = `details_control_${id}`;
		const panelId = `details_panel_${id}`;

		const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen);

		const open = (state: boolean) => {
			setIsOpen(state);
			onToggle(state);
		};

		const toggle = () => {
			open(!isOpen);
		};

		useImperativeHandle(
			forwardedRef,
			() => ({
				open,
			}),
			[open]
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
