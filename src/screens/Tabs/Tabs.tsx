import { ActivityFeed } from '@screens/ActivityFeed';
import { Home } from '@screens/Home';
import { Search } from '@screens/Search';
import { ProfilePage } from '@screens/viewer/Profile';
import { HomeIcon, MagnifyIcon, NewsIcon, UserIcon } from '@shared/ui';

import { TabBarIcon } from './TabBarIcon';
import { TabNavigator } from './TabNavigator';

const homeTabIcon = TabBarIcon(HomeIcon);
const searchTabIcon = TabBarIcon(MagnifyIcon);
const actifityFeedTabIcon = TabBarIcon(NewsIcon);
const profileTabIcon = TabBarIcon(UserIcon);

export const Tabs = () => {
    return (
        <TabNavigator>
            <TabNavigator.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: homeTabIcon,
                }}
            />
            <TabNavigator.Screen
                name='Search'
                component={Search}
                options={{
                    tabBarIcon: searchTabIcon,
                }}
            />
            <TabNavigator.Screen
                name='ActivityFeed'
                component={ActivityFeed}
                options={{
                    tabBarIcon: actifityFeedTabIcon,
                }}
            />
            <TabNavigator.Screen
                name='Profile'
                component={ProfilePage}
                options={{
                    tabBarIcon: profileTabIcon,
                }}
            />
        </TabNavigator>
    );
};
