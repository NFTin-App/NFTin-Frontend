import { FC } from 'react';

import { ThemeProvider } from '@shared/lib';

export const withTheme = (Component: FC) => () => {
    return (
        <ThemeProvider>
            <Component />
        </ThemeProvider>
    );
};
