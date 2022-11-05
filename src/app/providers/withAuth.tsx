import { FC } from 'react';
import { sample } from 'effector';
import { createGate, useGate } from 'effector-react';

import { viewerModel } from '@entities/viewer';
import { Connector } from '@shared/types';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

const appGate = createGate<Connector>('app');

sample({
    clock: appGate.state,
    filter: (connector) => connector.connected,
    target: viewerModel.connectorInited,
});

export const withAuth = (Component: FC) => () => {
    const connector = useWalletConnect();
    useGate(appGate, connector);

    return <Component />;
};
