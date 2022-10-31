import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '@screens/Login';

import { Start } from './Start';
import { Tabs } from './Tabs';

const Stack = createNativeStackNavigator();

export const Routing = () => {
    return (
        <Stack.Navigator
            initialRouteName='Start'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='Start' component={Start} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Tabs' component={Tabs} />
        </Stack.Navigator>
    );
};
