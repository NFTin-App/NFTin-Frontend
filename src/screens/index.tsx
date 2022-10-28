import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage } from '@screens/Login';

import { Tabs } from './Tabs';
export * from './Login';
export * from './viewer/Profile';

const Stack = createNativeStackNavigator();

const Routing = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='Login' component={LoginPage} />
            <Stack.Screen name='Tabs' component={Tabs} />
        </Stack.Navigator>
    );
};

export default Routing;
