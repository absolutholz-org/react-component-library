import { useEffect, useState } from 'react';

import { useColorSchemePreference } from 'web-api-hooks';

import { Kind } from '../../../enums/Kind';
import { Mode } from '../../../enums/Mode';
import { Theme } from '../../../enums/Theme';
import { useTimeout } from '../../../hooks/useTimeout';
import { OXCopyLarge } from '../../typography/oxide23/OXCopyLarge';
import { OXButtonLink } from '../buttons/OXButtonLink';
import { ThemeView } from '../ThemeView';
import type { IOXSnackbar } from './IOXSnackbar';
import * as S from './OXSnackbar.styled';

const useStoppableTimer = (callback: () => void) => {
    const [timeRunningOut, setTimeRunningOut] = useState<number | null>(null);
    const [isTimerRunning] = useState<boolean>(timeRunningOut !== null);

    const stopTimer = () => {
        setTimeRunningOut(null);
    };

    const startTimer = (timeInMs: number) => {
        setTimeRunningOut(timeInMs);
    };

    useTimeout(callback, timeRunningOut);

    return {
        stopTimer,
        startTimer,
        isTimerRunning,
    };
};

export const OXSnackbar = ({ id, close, icon, text, action }: IOXSnackbar): JSX.Element => {
    const browserMode = useColorSchemePreference();
    const theme = browserMode === Mode.Dark ? Theme.Prime : Theme.Option;
    const { stopTimer, startTimer } = useStoppableTimer(() => close(id));

    const restartTimer = () => startTimer(3000);

    useEffect(() => {
        startTimer(5000);
    }, [startTimer]);

    return (
        <ThemeView theme={theme}>
            <S._OXSnackbar onMouseEnter={stopTimer} onMouseLeave={restartTimer}>
                <S._OXSnackbar_Content>
                    {icon && <S._OXSnackbar_Icon kind={Kind.Primary} src={icon} size={24} />}
                    <OXCopyLarge text={text} />
                </S._OXSnackbar_Content>
                {action && (
                    <S._OXSnackbar_Action>
                        <OXButtonLink {...action} size='small' limitHeightToContent={true} />
                    </S._OXSnackbar_Action>
                )}
            </S._OXSnackbar>
        </ThemeView>
    );
};
