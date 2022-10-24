import { useMemo } from 'react';

import { ActivityFeed } from '@screens/ActivityFeed';
import { Home } from '@screens/Home';
import { Search } from '@screens/Search';
import ProfilePage from '@screens/viewer/Profile';
import { HomeIcon, MagnifyIcon, NewsIcon, UserIcon } from '@shared/ui';

import { TabBarIcon } from './TabBarIcon';
import { TabNavigator } from './TabNavigator';

export const Tabs = () => {
    const homeTabIcon = useMemo(() => TabBarIcon(HomeIcon), []);
    const searchTabIcon = useMemo(() => TabBarIcon(MagnifyIcon), []);
    const actifityFeedTabIcon = useMemo(() => TabBarIcon(NewsIcon), []);
    const profileTabIcon = useMemo(() => TabBarIcon(UserIcon), []);

    return (
        <TabNavigator>
            <TabNavigator.Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: homeTabIcon,
                }}
            />
            <TabNavigator.Screen
                name='search'
                component={Search}
                options={{
                    tabBarIcon: searchTabIcon,
                }}
            />
            <TabNavigator.Screen
                name='activityFeed'
                component={ActivityFeed}
                options={{
                    tabBarIcon: actifityFeedTabIcon,
                }}
            />
            <TabNavigator.Screen
                name='profile'
                component={ProfilePage}
                options={{
                    tabBarIcon: profileTabIcon,
                }}
            />
        </TabNavigator>
    );
};
