import type { ReactNode } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';

import { UUID } from '@sixt-web/core-common/src/cryptography/UUID';

import { Portal } from '../../private/Portal';
import type { IOXSnackbar } from './IOXSnackbar';
import { OXSnackbar } from './OXSnackbar';
import * as S from './OXSnackbar.styled';

interface IOXSnackbarContext {
    addSnackbarMessage: (message: IOXSnackbar) => void;
}

type IOXSnackbarMessage = Omit<IOXSnackbar, 'close'>;

export const OXSnackbarContext = createContext<IOXSnackbarContext>({} as IOXSnackbarContext);

export const OXSnackbarProvider = ({ children }: { children: ReactNode }): JSX.Element => {
    const [messages, setMessages] = useState<IOXSnackbarMessage[]>([]);

    const addSnackbarMessage = (message: IOXSnackbar) => {
        setMessages(currentMessages => [...currentMessages, { ...message, id: UUID.generate() }]);
    };

    const removeSnackbarMessage = (id: string) => {
        setMessages(currentMessages => currentMessages.filter(message => message.id !== id));
    };

    const contextValue = useMemo(() => ({ addSnackbarMessage }), []);

    return (
        <OXSnackbarContext.Provider value={contextValue}>
            {children}
            <Portal>
                <S._OXSnackbar_Container>
                    {messages.map(message => (
                        <OXSnackbar
                            close={() => removeSnackbarMessage(message.id)}
                            key={`snackbar-message_${message.id}`}
                            {...message}
                        />
                    ))}
                </S._OXSnackbar_Container>
            </Portal>
        </OXSnackbarContext.Provider>
    );
};

export const useOXSnackbar = (): IOXSnackbarContext => useContext(OXSnackbarContext);
