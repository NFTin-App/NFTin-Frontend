import { FC } from 'react';
import { createEffect, sample } from 'effector';
import { createGate, useGate } from 'effector-react';
import _ from 'lodash';
import Moralis from 'moralis';
import { viewerModel } from '@entities/viewer';
import { Connector } from '@shared/types';
import { useWalletConnectContext } from '@walletconnect/react-native-dapp';

const appGate = createGate();

sample({
    clock: appGate.open,
    target: createEffect(() => {
        Moralis.start({
            // TODO .env
            apiKey: 'DUnJb3uu2X4ddIpXx3n4Wwt14ulMFevYqai9jpYU7AeGOetHOuKjICaHF31jYayy',
        });
    }),
});

export const withMoralis = (Component: FC) => () => {
    useGate(appGate);

    return <Component />;
};
