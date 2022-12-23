import type { IOXButtonLink } from '../buttons/OXButtonLink/IOXButtonLink';
import type { IOXSvg } from '../OXIcon/assets/IOXSvg.types';

export type OXSnackbarVariant = 'brand' | 'primary' | 'secondary' | 'warning';
export type OXSnackbarPosition = 'standalone' | 'corner';

export interface IOXSnackbar {
    /** Internally generated, unique identification for the notification. */
    id: string;

    /** Internally used function to close the notification. */
    close: (id: string) => void;

    /** Text that will be displayed for the snackbar notification. */
    text: string;

    /** Icon in case required for the snackbar notification. */
    icon?: IOXSvg;

    /** Action (currently only ButtonLink is allowed) component for each snackbar notification. */
    action?: Omit<IOXButtonLink, 'icon' | 'size' | 'limitHeightToContent'>;
}
