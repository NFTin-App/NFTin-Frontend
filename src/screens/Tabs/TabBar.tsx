import { useMemo } from 'react';

import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { assert } from '@shared/lib';
import { DropShadow, useTheme, View } from '@shared/ui';

import { RocketButton } from './RocketButton';
import { TabBarButton } from './TabBarButton';

type Props = React.ComponentProps<typeof BottomTabBar>;

export const TabBar = ({ state, descriptors }: Props) => {
    assert(state.routes.length === 4);

    const { theme } = useTheme();

    const items = useMemo(
        () =>
            state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                return (
                    <TabBarButton
                        key={route.key}
                        route={route}
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
            shadowColor={theme.palette.primary200}
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
            height={75}
        >
            <View
                flex={1}
                pt={13}
                paddingHorizontal={24}
                flexDirection='row'
                alignItems='flex-start'
                justifyContent='space-between'
                backgroundColor={theme.palette.white}
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
