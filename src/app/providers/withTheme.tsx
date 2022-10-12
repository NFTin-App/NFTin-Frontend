import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@shared/lib';

export const withTheme = (Component: FC) => () => {
    return (
        <ThemeProvider theme={theme}>
            <Component />
        </ThemeProvider>
    );
};
