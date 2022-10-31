import { useStore } from 'effector-react';

import { viewerModel } from '@entities/viewer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConnectWalletPage } from '@screens/ConnectWallet';
import { ConnectLensProfile, SelectLensProfile } from '@screens/lens';
import { Loading } from '@screens/Loading';
import { RootStackParamList } from '@shared/types';

import { ProfilePage } from '../viewer/Profile';

import { generateDefaultScreenOptions } from './lib';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routing = () => {
    const isProvider = useStore(viewerModel.$provider.map((provider) => !!provider));

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='Loading'
        >
            {!isProvider && <Stack.Screen name='ConnectWallet' component={ConnectWalletPage} />}
            <Stack.Screen name='Profile' component={ProfilePage} />
            <Stack.Screen name='ConnectLensProfile' component={ConnectLensProfile} />
            <Stack.Screen
                options={generateDefaultScreenOptions({ title: 'Lens Profile' })}
                name='SelectLensProfile'
                component={SelectLensProfile}
            />
            <Stack.Screen name='Loading' component={Loading} />
        </Stack.Navigator>
    );
};
