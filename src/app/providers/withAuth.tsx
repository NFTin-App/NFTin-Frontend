import { FC, useEffect } from 'react';
import { useEvent } from 'effector-react';

import { viewerModel } from '@entities/viewer';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

export const withAuth = (Component: FC) => () => {
    const init = useEvent(viewerModel.initConnector);
    const connector = useWalletConnect();

    useEffect(() => {
        init(connector);
    }, [connector, init]);

    return <Component />;
};
