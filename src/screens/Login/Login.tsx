import { useCallback, useEffect } from 'react';
import { useStore } from 'effector-react';

import { viewerModel } from '@entities/viewer';
import { ConnectWalletButton } from '@features/auth';
import { useNavigation } from '@react-navigation/native';
import { Image, OutlineButton, SafeAreaView, View } from '@shared/ui';

import background from './images/background.png';

export const Login = () => {
    const { navigate } = useNavigation();
    const isWalletConnected = useStore(viewerModel.$isConnected);

    const navigateTabs = useCallback(() => navigate('Tabs'), [navigate]);

    useEffect(() => {
        if (isWalletConnected) {
            navigateTabs();
        }
    }, [isWalletConnected, navigateTabs]);

    return (
        <SafeAreaView flex={1}>
            <View flex={1} paddingHorizontal={24} paddingBottom={40} justifyContent='flex-end'>
                <View flex={1} justifyContent='center' alignItems='center'>
                    <Image width={245} height={273} source={background} />
                </View>
                <ConnectWalletButton />
                <OutlineButton onPress={navigateTabs} mt={8} title='Explore the app as a guest' />
            </View>
        </SafeAreaView>
    );
};
