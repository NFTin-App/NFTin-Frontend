import { compose } from 'recompose';

import { withAuth } from './withAuth';
import { withNavigation } from './withNavigation';
import { withSafeArea } from './withSafeArea';
import { withTheme } from './withTheme';
import { withWalletConnect } from './withWalletConnect';

export const withProviders = compose(
    withWalletConnect,
    withTheme,
    withNavigation,
    withAuth,
    withSafeArea
);
