import { useMemo } from 'react';
import { Dimensions } from 'react-native';
import { Path, Svg } from 'react-native-svg';

import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { RouteProp, TabNavigationState } from '@react-navigation/native';
import { assert } from '@shared/lib';
import { RootStackParamList } from '@shared/types';
import { DropShadow, useTheme, View } from '@shared/ui';

import { RocketButton } from './RocketButton';
import { TabBarButton } from './TabBarButton';

const window = Dimensions.get('window');
const NOTCH_WIDTH = 150;
const TABBAR_HEIGHT = 75;
const CORNER_RADIUS = 24;

const width = window.width;

const leftEnd = Math.ceil((width - NOTCH_WIDTH) / 2);
const rightStart = Math.ceil((width + NOTCH_WIDTH) / 2);
const middle = Math.ceil(width / 2);

const tabbarShape = `
    M 0 ${TABBAR_HEIGHT}
    L 0 ${CORNER_RADIUS}
    A ${CORNER_RADIUS} ${CORNER_RADIUS} 0 0 1 ${CORNER_RADIUS} 0
    L ${leftEnd} 0
    C ${leftEnd + 14} 0, ${leftEnd + 24} 8, ${leftEnd + 30} 15
    C ${leftEnd + 38} 25, ${leftEnd + 58} 33, ${middle} 33
    C ${rightStart - 58} 33, ${rightStart + -38} 25, ${rightStart - 30} 15
    C ${rightStart - 24} 8, ${rightStart - 14} 0, ${rightStart} 0
    L ${rightStart} 0
    L ${width - CORNER_RADIUS} 0
    A ${CORNER_RADIUS} ${CORNER_RADIUS} 0 0 1 ${width} ${CORNER_RADIUS}
    L ${width} ${TABBAR_HEIGHT}
    L 0 ${TABBAR_HEIGHT}
    `;

export const TabBar = ({ state, descriptors }: BottomTabBarProps) => {
    assert(state.routes.length === 4);

    const { theme } = useTheme();

    const items = useMemo(
        () =>
            state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                return (
                    <TabBarButton
                        key={route.key}
                        route={route as RouteProp<RootStackParamList, keyof RootStackParamList>}
                        focused={state.index === index}
                        {...options}
                    />
                );
            }),
        [descriptors, state.index, state.routes]
    );

    const leftItems = items.slice(0, 2);
    const rightItems = items.slice(2, 4);

    return (
        <DropShadow
            shadowColor='primary200'
            shadowOpacity={0.15}
            shadowOffset={{
                width: 0,
                height: 0,
            }}
            shadowRadius={22}
            position='absolute'
            bottom={0}
            right={0}
            left={0}
            height={TABBAR_HEIGHT}
        >
            <Svg
                width={width}
                height={TABBAR_HEIGHT}
                viewBox={`0 0 ${width} ${TABBAR_HEIGHT}`}
                fill={theme.palette.white}
            >
                <Path d={tabbarShape} />
            </Svg>
            <View
                position='absolute'
                top={0}
                bottom={0}
                right={0}
                left={0}
                flex={1}
                pt={13}
                paddingHorizontal={24}
                flexDirection='row'
                alignItems='flex-start'
                justifyContent='space-between'
            >
                <View flexDirection='row' flex={1} justifyContent='space-between'>
                    {leftItems}
                </View>
                <View width={150} />
                <View flexDirection='row' flex={1} justifyContent='space-between'>
                    {rightItems}
                </View>
                <View
                    position='absolute'
                    top={-30}
                    left={0}
                    right={0}
                    bottom={0}
                    justifyContent='center'
                    alignItems='center'
                >
                    <RocketButton />
                </View>
            </View>
        </DropShadow>
    );
};
