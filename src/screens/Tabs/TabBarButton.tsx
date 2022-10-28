import { useCallback } from 'react';

import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@shared/types';
import { TouchableWithoutFeedback, useTheme, View } from '@shared/ui';

interface Props extends BottomTabNavigationOptions {
    route: RouteProp<RootStackParamList, keyof RootStackParamList>;
    focused?: boolean;
}

export const TabBarButton = ({ route, focused = false, tabBarIcon }: Props) => {
    const { navigate } = useNavigation();
    const { theme } = useTheme();
    const handlePress = useCallback(() => {
        if (!focused) {
            navigate(route.name);
        }
    }, [focused, navigate, route.name]);
    return (
        <TouchableWithoutFeedback key={route.key} onPress={handlePress}>
            <View width={34} height={34} alignItems='center' justifyContent='center'>
                {tabBarIcon?.({
                    color: focused ? theme.palette.accent200 : theme.palette.primary100,
                    focused,
                    size: 24,
                })}
            </View>
        </TouchableWithoutFeedback>
    );
};
