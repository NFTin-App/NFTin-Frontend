import { useEvent } from 'effector-react';

import { viewerModel } from '@entities/viewer';
import { useNavigation } from '@react-navigation/native';
import wallet from '@shared/assets/media/wallet.webp';
import { ProfileScreenNavigationProp } from '@shared/types';
import { Button, Image, Text, View } from '@shared/ui';

export const ProfileWalletConnect = () => {
    const { reset } = useNavigation<ProfileScreenNavigationProp>();
    const updateIsGuest = useEvent(viewerModel.updateGuestFx);

    const redirectToConnect = async () => {
        await updateIsGuest(false);

        reset({
            index: 0,
            routes: [{ name: 'ConnectWallet' }],
        });
    };

    return (
        <View flex={1} paddingHorizontal={24} marginTop={50} alignItems='center'>
            <Image height={273} width={245} source={wallet} />

            <View width='80%' marginTop={50}>
                <Text textAlign='center' color='black' fontSize={20} fontWeight='500'>
                    Connect wallet to track your NFTin portfolio!
                </Text>

                <Text marginTop={20} textAlign='center' color='black'>
                    To become a part of NFTin, you need to connect a wallet and Lens protocol.
                </Text>
            </View>
            <View marginBottom='35%' width='100%' flex={1} justifyContent='flex-end'>
                <Button title='Go to connect' onPress={redirectToConnect} />
            </View>
        </View>
    );
};
