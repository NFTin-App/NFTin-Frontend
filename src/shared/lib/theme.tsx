import React, { createContext, useCallback, useContext, useState } from 'react';

import { Color, Pallete, Theme } from '@shared/types';

export interface ThemeContext {
    theme: Theme;
}

interface Props {
    children: React.ReactNode;
    theme?: Theme;
}

const palette: Pallete = {
    primary100: '#8067EB',
    primary200: '#533EAB',
    accent100: '#DC5D83',
    accent200: '#F61256',
    white: '#FFFFFF',
    black100: '#332F48',
    gray100: '#555265',
    gray200: '#BBBCBD',
    gray300: '#F3F4F6',
};

export const defaultTheme: Theme = {
    palette,
    icon: {
        size: 24,
        strokeWidth: 2,
    },
};

const themeContext = createContext<ThemeContext>({ theme: defaultTheme });

export const ThemeProvider = ({ children, theme }: Props) => {
    const [state] = useState<ThemeContext>({ theme: theme ?? defaultTheme });

    return <themeContext.Provider value={state}>{children}</themeContext.Provider>;
};

export const useTheme = () => {
    const { theme } = useContext(themeContext);
    const getColor = useCallback(
        (color: Color) => {
            return theme.palette[color as keyof Pallete] || color;
        },
        [theme]
    );

    return {
        theme,
        getColor,
    };
};