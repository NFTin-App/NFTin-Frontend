import { useEvent } from 'effector-react';

import { Button, Text } from '@shared/ui';

import { authModel } from '..';

export const ConnectWallet = () => {
    const connectWallet = useEvent(authModel.connectWalletFx);

    return (
        <Button onPress={connectWallet}>
            <Text>Connect Wallet</Text>
        </Button>
    );
};
