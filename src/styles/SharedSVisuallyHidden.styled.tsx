import styled from 'styled-components';

/**
 * A component used to contain content that is to be visually hidden, but still
 * accessible to non-visual, assistive technologies, ie. screen readers, bots, etc.
 *
 * @see {@link https://a11y-guidelines.orange.com/en/web/components-examples/accessible-hiding/ Accessible hiding @ Orange Digital Accessibility}
 * @see {@link https://www.a11yproject.com/posts/how-to-hide-content/ Hide content @ The A11Y Project}
 * @see {@link https://levelup.gitconnected.com/a11y-visually-hidden-elements-aea4ee784142 A11y: Visually Hidden Elements}
 * @see {@link https://css-tricks.com/inclusively-hidden/ Inclusively Hidden @ CSS-Tricks}
 * @see {@link https://scottvinkle.me/blogs/work/hidden-content Tips on Making Sure Hidden Content is Accessible (or Not!)}
 *
 * @example
 * <Button>
 *   <SaveIcon aria-hidden="true" />
 *   <SharedSVisuallyHidden>Save your changes</SharedSVisuallyHidden>
 * </Button>
 *
 * @example
 * <nav>
 *   <SharedSVisuallyHidden as="h2">SIXT products</SharedSVisuallyHidden>
 *   <!-- List of links -->
 * </nav>
 */
export const SharedSVisuallyHidden = styled.div`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;
