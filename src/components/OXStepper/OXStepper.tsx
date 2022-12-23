import { useFormContext } from 'react-hook-form-latest';

import { Kind } from '../../../enums/Kind';
import { OXIcon } from '../OXIcon';
import type { IOXStepper } from './IOXStepper';
import * as S from './OXStepper.styled';

export const OXStepper = ({
    name,
    max,
    min = 0,
    labelStepUp,
    labelStepDown,
    isDisabled = false,
    step = 1,
    closeOnMinValue = false,
}: IOXStepper): JSX.Element => {
    const formContext = useFormContext();
    const { register, setValue, watch } = { ...formContext };
    const value = parseInt(watch(name));
    const isClosed = closeOnMinValue && value === min;

    const handleDecrement = () => {
        setValue(name, value - step);
    };

    const handleIncrement = () => {
        setValue(name, value + step);
    };

    function handleClick() {
        if (isClosed) {
            handleIncrement();
        }
    }

    return (
        <S._OXStepper isClosed={isClosed} isDisabled={isDisabled} onClick={handleClick}>
            <S._OXStepper_Decrement
                aria-controls={`stepper-${name}`}
                aria-label={labelStepDown}
                disabled={isDisabled || value <= min}
                onClick={handleDecrement}>
                <OXIcon kind={Kind.OnBrand} src='remove' />
            </S._OXStepper_Decrement>
            <S._OXStepper_input
                aria-live='assertive'
                disabled={isDisabled}
                id={`stepper-${name}`}
                max={max}
                min={min}
                readOnly
                {...register(name)}
                role='alert'
                step={step}
                tabIndex={-1}
                type='number'
            />
            <S._OXStepper_Increment
                aria-controls={`stepper-${name}`}
                aria-label={labelStepUp}
                disabled={isDisabled || value >= max}
                onClick={handleIncrement}>
                <OXIcon kind={Kind.Brand} src='add' />
            </S._OXStepper_Increment>
        </S._OXStepper>
    );
};
