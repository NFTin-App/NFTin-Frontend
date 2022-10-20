import { FC } from 'react';

import { ThemeProvider } from '@shared/ui';

export const withTheme = (Component: FC) => () => {
    return (
        <ThemeProvider>
            <Component />
        </ThemeProvider>
    );
};
