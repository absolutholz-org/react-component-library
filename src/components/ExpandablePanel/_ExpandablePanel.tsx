import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

import { IExpandablePanel } from "./_ExpandablePanel.annotations";
import * as S from "./_ExpandablePanel.styled";

export const ExpandablePanel = forwardRef(
	(
		{
			children,
			id,
			isInitiallyExpanded = false,
			onCollapse = () => {},
			onExpand = () => {},
			slotControl,
		}: IExpandablePanel,
		forwardedRef
	): JSX.Element => {
		const controlId = `expandable-panel_control_${id}`;
		const panelId = `expandable-panel_panel_${id}`;

		const [isExpanded, setIsExpanded] =
			useState<boolean>(isInitiallyExpanded);

		const toggleIsExpanded = () => {
			setIsExpanded((state) => !state);
		};

		const collapse = () => {
			setIsExpanded(false);
		};

		const expand = () => {
			setIsExpanded(true);
		};

		useEffect(() => {
			isExpanded ? onExpand({ id }) : onCollapse({ id });
		}, [isExpanded]);

		useImperativeHandle(
			forwardedRef,
			() => ({
				collapse,
				expand,
			}),
			[collapse, expand]
		);

		return (
			<>
				<S.ExpandablePanel_Control
					aria-controls={panelId}
					aria-expanded={isExpanded}
					id={controlId}
					onClick={toggleIsExpanded}
				>
					{slotControl}
				</S.ExpandablePanel_Control>
				<div
					aria-hidden={!isExpanded}
					aria-labelledby={controlId}
					hidden={!isExpanded}
					id={panelId}
					role="region"
				>
					{children}
				</div>
			</>
		);
	}
);
