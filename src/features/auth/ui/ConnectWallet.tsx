import { useEvent } from 'effector-react';

import { Button } from '@shared/ui';

import { authModel } from '..';

export const ConnectWallet = () => {
    const connectWallet = useEvent(authModel.connectWalletFx);

    return <Button title={'Connect Wallet'} onPress={connectWallet} />;
};
