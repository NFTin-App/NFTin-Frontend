import { useCallback } from 'react';

import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@shared/lib';
import { ProfileScreenNavigationProp, RootTabParamList } from '@shared/types';
import { TouchableWithoutFeedback, View } from '@shared/ui';

interface Props extends BottomTabNavigationOptions {
    route: RouteProp<RootTabParamList, keyof RootTabParamList>;
    focused?: boolean;
}

export const TabBarButton = ({ route, focused = false, tabBarIcon }: Props) => {
    const { navigate } = useNavigation<ProfileScreenNavigationProp>();

    const { theme } = useTheme();
    const handlePress = useCallback(() => {
        if (!focused) {
            navigate('Tabs', { screen: route.name });
        }
    }, [focused, navigate, route.name]);

    return (
        <TouchableWithoutFeedback key={route.key} onPress={handlePress}>
            <View
                width={50}
                height={50}
                paddingBottom={10}
                alignItems='center'
                justifyContent='center'
            >
                {tabBarIcon?.({
                    color: focused ? theme.palette.accent200 : theme.palette.primary100,
                    focused,
                    size: 24,
                })}
            </View>
        </TouchableWithoutFeedback>
    );
};
