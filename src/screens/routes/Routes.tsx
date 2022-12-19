import { useStore } from 'effector-react';

import { viewerModel } from '@entities/viewer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddNft } from '@screens/AddNft';
import { ConnectWalletPage } from '@screens/ConnectWallet';
import { ConnectLensProfile, SelectLensProfile } from '@screens/lens';
import { Loading } from '@screens/Loading';
import { NftsList } from '@screens/NftsList';
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
            <Stack.Screen
                name='NftsList'
                options={generateDefaultScreenOptions({ title: 'Add nft' })}
                component={NftsList}
            />

            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen
                    options={generateDefaultScreenOptions({ title: 'Add nft' })}
                    name='AddNft'
                    component={AddNft}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
};
