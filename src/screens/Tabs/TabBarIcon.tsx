import React from 'react';

import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Icon } from '@shared/ui';
type TabBarIconProps = NonNullable<BottomTabNavigationOptions['tabBarIcon']>;

type IconProps = React.ComponentProps<typeof Icon>;

type Props = Parameters<TabBarIconProps>['0'];

export const TabBarIcon =
    (TabIcon: React.ComponentType<IconProps>, disabled: boolean) =>
    ({ color, size }: Props) =>
        <TabIcon color={disabled ? '#BBBCBD' : color} width={size} height={size} />;
