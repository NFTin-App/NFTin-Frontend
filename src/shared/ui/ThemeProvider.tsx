import React, { createContext, useContext, useState } from 'react';

import { theme as defaultTheme } from '@shared/lib';
import { Pallete, Theme } from '@shared/types';

type Color = keyof Pallete | (string & {});

export interface ThemeContext {
    theme: Theme;
}
const themeContext = createContext<ThemeContext>({ theme: defaultTheme });

interface Props {
    children: React.ReactNode;
    theme?: Theme;
}

export const ThemeProvider = ({ children, theme }: Props) => {
    const [state] = useState<ThemeContext>({ theme: theme ?? defaultTheme });

    return <themeContext.Provider value={state}>{children}</themeContext.Provider>;
};

export const useTheme = () => {
    const { theme } = useContext(themeContext);
    const getColor = (color: Color) => theme.palette[color as keyof Pallete] || color;
    return {
        theme,
        getColor,
    };
};
