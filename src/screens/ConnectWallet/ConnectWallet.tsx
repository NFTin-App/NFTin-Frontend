import { ConnectWalletButton } from '@features/auth';
import { Image, View } from '@shared/ui';

import wallet from './assets/wallet.webp';

export const ConnectWalletPage = () => {
    return (
        <View flex={1} paddingHorizontal={24} alignItems='center'>
            <Image height={273} width={245} source={wallet} position='absolute' top='25%' />

            <View marginBottom={43} width='100%' flex={1} justifyContent='flex-end'>
                <ConnectWalletButton />
            </View>
        </View>
    );
};
