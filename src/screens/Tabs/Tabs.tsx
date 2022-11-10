import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActivityFeed } from '@screens/ActivityFeed';
import { Home } from '@screens/Home';
import { Search } from '@screens/Search';
import { ProfilePage } from '@screens/viewer/Profile';
import { RootTabParamList } from '@shared/types';
import { HomeIcon, MagnifyIcon, NewsIcon, UserIcon } from '@shared/ui';

import { TabBar } from './TabBar';
import { TabBarIcon } from './TabBarIcon';

const homeTabIcon = TabBarIcon(HomeIcon);
const searchTabIcon = TabBarIcon(MagnifyIcon);
const actifityFeedTabIcon = TabBarIcon(NewsIcon);
const profileTabIcon = TabBarIcon(UserIcon);

const Tab = createBottomTabNavigator<RootTabParamList>();

export const Tabs = () => {
    return (
        <Tab.Navigator initialRouteName='Home' tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: homeTabIcon,
                }}
            />
            <Tab.Screen
                name='Search'
                component={Search}
                options={{
                    tabBarIcon: searchTabIcon,
                }}
            />
            <Tab.Screen
                name='ActivityFeed'
                component={ActivityFeed}
                options={{
                    tabBarIcon: actifityFeedTabIcon,
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfilePage}
                options={{
                    tabBarIcon: profileTabIcon,
                }}
            />
        </Tab.Navigator>
    );
};
