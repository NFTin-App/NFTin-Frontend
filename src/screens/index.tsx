import { useStore } from 'effector-react';

import { viewerModel } from '@entities/viewer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage } from '@screens/Login';

import ProfilePage from './viewer/Profile';
export * from './Login';
export * from './viewer/Profile';

const Stack = createNativeStackNavigator();

const Routing = () => {
    const isWalletConnected = useStore(viewerModel.$isConnected);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {!isWalletConnected && <Stack.Screen name='Login' component={LoginPage} />}
            <Stack.Screen name='Profile' component={ProfilePage} />
        </Stack.Navigator>
    );
};

export default Routing;
