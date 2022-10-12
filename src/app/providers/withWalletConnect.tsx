import { FC } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { withWalletConnect as withConnect } from '@walletconnect/react-native-dapp';

export const withWalletConnect = (Component: FC) =>
    withConnect(Component, {
        redirectUrl: 'www://app',

        // * https://github.com/react-native-async-storage/async-storage/issues/745
        storageOptions: {
            // @ts-expect-error: Internal
            asyncStorage: AsyncStorage,
        },
    });
