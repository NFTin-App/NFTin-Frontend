import { useEvent } from 'effector-react';

import { Button } from '@shared/ui';

import { connectWalletFx } from '../model';

export const ConnectWallet = () => {
    const connectWallet = useEvent(connectWalletFx);

    return <Button title='Connect Wallet' textAttirbutes={{}} onPress={connectWallet} />;
};
