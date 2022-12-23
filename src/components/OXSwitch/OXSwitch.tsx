import { useFormContext } from 'react-hook-form-latest';

import { SharedSVisuallyHidden } from '../../styles/SharedSVisuallyHidden.styled';
import type { IOXSwitch } from './IOXSwitch';
import * as S from './OXSwitch.styled';

export const OXSwitch = ({ isDisabled = false, name, id, value }: IOXSwitch): JSX.Element => {
    const { register } = useFormContext();

    return (
        <>
            <SharedSVisuallyHidden
                as='input'
                disabled={isDisabled}
                id={id}
                {...register(name)}
                type='checkbox'
                value={value}
            />
            <S._OXSwitch />
        </>
    );
};
