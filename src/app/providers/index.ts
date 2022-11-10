import { compose } from 'recompose';

import { withAppInit } from './withAppInit';
import { withAuth } from './withAuth';
import { withConnector } from './withConnector';
import { withNavigation } from './withNavigation';
import { withSafeArea } from './withSafeArea';
import { withTheme } from './withTheme';
import { withWalletConnect } from './withWalletConnect';

export const withProviders = compose(
    withTheme,
    withWalletConnect,
    withSafeArea,
    withNavigation,
    withConnector,
    withAuth,
    withAppInit
);
