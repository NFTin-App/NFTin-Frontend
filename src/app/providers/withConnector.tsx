import { FC } from 'react';
import { sample } from 'effector';
import { createGate, useGate } from 'effector-react';
import _ from 'lodash';

import { viewerModel } from '@entities/viewer';
import { Connector } from '@shared/types';
import { useWalletConnectContext } from '@walletconnect/react-native-dapp';

const appGate = createGate<Connector | undefined>('connector');

const isValidConnector = (connector: Connector | undefined): connector is Connector =>
    !!connector && !_.isEmpty(connector);

sample({
    clock: appGate.state,
    filter: isValidConnector,
    target: viewerModel.connectorInited,
});

export const withConnector = (Component: FC) => () => {
    const { connector } = useWalletConnectContext();
    useGate(appGate, connector);

    return <Component />;
};
