import React, { useContext, useState } from 'react';

import { theme as defaultTheme } from '@shared/lib';
import { Theme } from '@shared/types';

export interface ThemeContext {
    theme: Theme;
}
const themeContext = React.createContext<ThemeContext>({ theme: defaultTheme });

interface Props {
    children: React.ReactNode;
    theme?: Theme;
}

export const ThemeProvider = ({ children, theme }: Props) => {
    const [state] = useState<ThemeContext>({ theme: theme ?? defaultTheme });
    return <themeContext.Provider value={state}>{children}</themeContext.Provider>;
};

export const useTheme = (): ThemeContext => useContext(themeContext);
