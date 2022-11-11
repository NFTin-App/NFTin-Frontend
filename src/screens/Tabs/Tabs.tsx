import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActivityFeed } from '@screens/ActivityFeed';
import { Home } from '@screens/Home';
import { Search } from '@screens/Search';
import { ProfilePage } from '@screens/viewer/Profile';
import { RootTabParamList } from '@shared/types';
import { HomeIcon, MagnifyIcon, NewsIcon, UserIcon } from '@shared/ui';

import { TabBar } from './TabBar';
import { TabBarIcon } from './TabBarIcon';

const homeTabIcon = TabBarIcon(HomeIcon, true);
const searchTabIcon = TabBarIcon(MagnifyIcon, true);
const actifityFeedTabIcon = TabBarIcon(NewsIcon, true);
const profileTabIcon = TabBarIcon(UserIcon, false);

const Tab = createBottomTabNavigator<RootTabParamList>();

export const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='Home'
            tabBar={(props) => <TabBar {...props} />}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: homeTabIcon,
                    title: 'home',
                }}
            />
            <Tab.Screen
                name='Search'
                component={Search}
                options={{
                    tabBarIcon: searchTabIcon,
                    title: 'search',
                }}
            />
            <Tab.Screen
                name='ActivityFeed'
                component={ActivityFeed}
                options={{
                    tabBarIcon: actifityFeedTabIcon,
                    title: 'activity',
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfilePage}
                options={{
                    tabBarIcon: profileTabIcon,
                    title: 'profile',
                }}
            />
        </Tab.Navigator>
    );
};
