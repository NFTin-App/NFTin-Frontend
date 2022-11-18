import { useGate } from 'effector-react';

import { ConnectWalletButton, LoginAsGuestButton } from '@features/auth';
import wallet from '@shared/assets/media/wallet.webp';
import { Image, ScreenContainer, View } from '@shared/ui';

import { pageGate } from './connectWalletModel';

export const ConnectWalletPage = () => {
    useGate(pageGate);
    return (
        <ScreenContainer noScroll>
            <View flex={1} justifyContent='center' alignItems='center'>
                <Image height={273} width={245} source={wallet} />
            </View>

            <View marginBottom={40}>
                <ConnectWalletButton />

                <View marginTop={5}>
                    <LoginAsGuestButton title='No, continue as guest' />
                </View>
            </View>
        </ScreenContainer>
    );
};
