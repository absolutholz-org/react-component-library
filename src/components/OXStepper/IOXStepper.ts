export interface IOXStepper {
    /** Define the name of the input field */
    name: string;

    /** Maximum amount that can be selected */
    max: number;

    /** Minimum amount that can be selected */
    min?: number;

    /** Incremental amount that the buttons increase or decrease the value by */
    step?: number;

    /** Aria label for the stepper button to increase the input's value */
    labelStepUp: string;

    /** Aria label for the stepper button to decrease the input's value */
    labelStepDown: string;

    /** Is the form field (and stepper buttons) disabled */
    isDisabled?: boolean;

    /** Should the stepper close to a switch appearance when the minimum value is reached */
    closeOnMinValue?: boolean;
}
