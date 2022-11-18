import { useStore } from 'effector-react';

import { viewerModel } from '@entities/viewer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConnectWalletPage } from '@screens/ConnectWallet';
import { ConnectLensProfile, SelectLensProfile } from '@screens/lens';
import { Loading } from '@screens/Loading';
import { Onboarding } from '@screens/Onboarding';
import { Start } from '@screens/Start';
import { Tabs } from '@screens/Tabs';
import { RootStackParamList } from '@shared/types';

import { generateDefaultScreenOptions } from './lib';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routing = () => {
    const isConnected = useStore(viewerModel.$isConnected);
    const isLensConnected = useStore(viewerModel.$isLensConnected);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='Loading'
        >
            {!isConnected && (
                <>
                    <Stack.Screen name='Start' component={Start} />
                    <Stack.Screen name='ConnectWallet' component={ConnectWalletPage} />
                    <Stack.Screen name='Onboarding' component={Onboarding} />
                </>
            )}
            {!isLensConnected && (
                <>
                    <Stack.Screen name='ConnectLensProfile' component={ConnectLensProfile} />
                    <Stack.Screen
                        options={generateDefaultScreenOptions({ title: 'Lens Profile' })}
                        name='SelectLensProfile'
                        component={SelectLensProfile}
                    />
                </>
            )}
            <Stack.Screen name='Loading' component={Loading} />
            <Stack.Screen name='Tabs' component={Tabs} />
        </Stack.Navigator>
    );
};
