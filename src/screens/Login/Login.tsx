import { useCallback, useEffect } from 'react';
import { useStore } from 'effector-react';

import { viewerModel } from '@entities/viewer';
import { ConnectWalletButton } from '@features/auth';
import { useNavigation } from '@react-navigation/native';
import { OutlineButton, View } from '@shared/ui';

export const LoginPage = () => {
    const { navigate } = useNavigation();
    const isWalletConnected = useStore(viewerModel.$isConnected);

    const navigateTabs = useCallback(() => navigate('Tabs'), [navigate]);

    useEffect(() => {
        if (isWalletConnected) {
            navigateTabs();
        }
    }, [isWalletConnected, navigateTabs]);

    return (
        <View flex={1} paddingHorizontal={16} justifyContent='center'>
            <ConnectWalletButton />
            <OutlineButton onPress={navigateTabs} mt={8} title='Explore the app as a guest' />
        </View>
    );
};
