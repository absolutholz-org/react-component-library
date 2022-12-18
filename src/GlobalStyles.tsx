import { css, Global } from "@emotion/react";

/**
 * https://www.joshwcomeau.com/css/custom-css-reset/
 */
const globalCss = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	* {
		border: none;
	}

	@viewport {
		width: device-width;
	}

	:root {
		color-scheme: light dark;
		line-height: 1.5;
	}

	html {
		-webkit-text-size-adjust: none; // for iOS Safari
		text-size-adjust: none; // for other mobile browsers
		-webkit-font-smoothing: antialiased; // for MacOS

		@media (prefers-reduced-motion: no-preference) {
			scroll-behavior: smooth;
		}
	}

	body {
		margin: 0;
		min-height: 100%;
	}

	img,
	picture,
	video,
	canvas,
	svg {
		display: block;
		max-width: 100%;
	}

	menu,
	ol,
	ul {
		list-style-position: inside;
	}

	a {
		text-underline-position: under;
	}

	input,
	button,
	textarea,
	select {
		font: inherit;
	}

	label,
	button,
	select,
	summary,
	[type="radio"],
	[type="submit"],
	[type="checkbox"] {
		cursor: pointer;

		&:disabled {
			cursor: not-allowed;
		}
	}

	button {
		appearance: none;
		background: none;
		border: none;
		border-radius: 0;
		color: inherit;
		cursor: pointer;
		font: inherit;
		margin: 0;
		overflow: visible;
		padding: 0;
		text-align: inherit;
		width: auto;
	}

	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		overflow-wrap: break-word;
		hyphens: auto;
	}
`;

export const GlobalStyles = () => {
	return <Global styles={globalCss} />;
};
