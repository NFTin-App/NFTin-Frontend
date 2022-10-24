import { useStore } from 'effector-react';

import { viewerModel } from '@entities/viewer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage } from '@screens/Login';

import { Tabs } from './Tabs';
export * from './Login';
export * from './viewer/Profile';

const Stack = createNativeStackNavigator();

const Routing = () => {
    const isWalletConnected = useStore(viewerModel.$isConnected);

    return (
        <Stack.Navigator
            initialRouteName={'Tabs'}
            screenOptions={{
                headerShown: false,
            }}
        >
            {!isWalletConnected && <Stack.Screen name={'Login'} component={LoginPage} />}
            <Stack.Screen name={'Tabs'} component={Tabs} />
        </Stack.Navigator>
    );
};

export default Routing;
