import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { BackButton } from './BackButton';

export const generateDefaultScreenOptions = (
    options: NativeStackNavigationOptions
): NativeStackNavigationOptions => {
    return {
        animationDuration: 200,
        animation: 'fade_from_bottom',
        headerStyle: {
            backgroundColor: '#ffffff',
        },
        headerShadowVisible: false,
        headerShown: true,
        title: 'Lens Profile',
        headerBackVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: '500',
        },
        headerLeft: BackButton,
        headerBackTitleVisible: false,
        ...options,
    };
};
