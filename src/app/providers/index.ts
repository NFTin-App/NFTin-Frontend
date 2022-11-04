import { compose } from 'recompose';

import { withAuth } from './withAuth';
import { withNavigation } from './withNavigation';
import { withTheme } from './withTheme';
import { withWalletConnect } from './withWalletConnect';

export const withProviders = compose(withTheme, withWalletConnect, withNavigation, withAuth);
