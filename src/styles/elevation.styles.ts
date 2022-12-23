import type { CSSProp } from 'styled-components';
import { css } from 'styled-components';

export type ElevationLevel = 2 | 4 | 24;

export type ColorScheme = 'day' | 'night';

const ELEVATION_SHADOW: Record<ElevationLevel, string> = {
    2: '0px 2px 6px rgba(0, 0, 0, 0.1), 0px 1px 4px rgba(0, 0, 0, 0.08)',
    4: '0px 4px 14px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.08)',
    24: '0px 12px 40px rgba(0, 0, 0, 0.1), 0px 8px 32px rgba(0, 0, 0, 0.08)',
} as const;

const ELEVATION_OPACITY: Record<ElevationLevel, number> = {
    2: 0.03,
    4: 0.06,
    24: 0.12,
} as const;

/**
 * Styles that visually simulate elevating an element
 * @param elevationLevel - the factor by which to elevate the element; 0 is used to eliminate elevation
 * @param colorScheme - the current day/night color scheme to use
 * @returns Css styles to apply elevation
 */
export const elevateStyles = (elevationLevel: ElevationLevel | 0, colorScheme?: ColorScheme): CSSProp => css`
    ${elevationLevel === 0
        ? css`
              box-shadow: none;
              background-image: none;
          `
        : css`
              box-shadow: ${ELEVATION_SHADOW[elevationLevel]};
              ${colorScheme === 'night' &&
              css`
                  /* This is the overlay used to lighten the element as if it is "elevated" */
                  background-image: linear-gradient(
                      /* This is a dummy color stop needed to make the gradient valid, but is never shown. */ red,
                      rgba(239, 239, 255, ${ELEVATION_OPACITY[elevationLevel]}) 0%
                  );
              `}
          `}
`;
