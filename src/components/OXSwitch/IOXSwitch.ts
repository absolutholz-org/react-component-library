export interface IOXSwitch {
    /** Whether the input is disabled. */
    isDisabled?: boolean;

    /** Name of the input. */
    name: string;

    /**
     * Unique id of the input. Used to connect it to its label which improves the element's accessibility.
     * Keep in mind that the id of an input should be unique across the whole page.
     * We recommend using the following convention: `${name}-${value}`.
     */
    id: string;

    /** Value of the input. */
    value?: string;
}
