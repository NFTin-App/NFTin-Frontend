import { useEvent } from 'effector-react';

import { Button } from '@shared/ui';

import { connectWalletFx } from '../authModel';

export const ConnectWallet = () => {
    const connectWallet = useEvent(connectWalletFx);

    return <Button width='100%' title='Connect your wallet' onPress={connectWallet} />;
};
