import { useGate } from 'effector-react';

import { ConnectWalletButton, LoginAsGuestButton } from '@features/auth';
import wallet from '@shared/assets/media/wallet.webp';
import { Image, View } from '@shared/ui';

import { pageGate } from './connectWalletModel';

export const ConnectWalletPage = () => {
    useGate(pageGate);
    return (
        <View flex={1} paddingHorizontal={24} alignItems='center'>
            <Image height={273} width={245} source={wallet} position='absolute' top='25%' />

            <View marginBottom={43} width='100%' flex={1} justifyContent='flex-end'>
                <ConnectWalletButton />

                <View marginTop={5}>
                    <LoginAsGuestButton title='No, continue as guest' />
                </View>
            </View>
        </View>
    );
};
