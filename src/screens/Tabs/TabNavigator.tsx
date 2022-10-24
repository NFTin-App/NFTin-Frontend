import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBar } from './TabBar';

const Tab = createBottomTabNavigator();

type Props = React.ComponentProps<typeof Tab.Navigator>;

export const TabNavigator = ({ children, ...rest }: Props) => (
    <Tab.Navigator {...rest} tabBar={(props) => <TabBar {...props} />}>
        {children}
    </Tab.Navigator>
);

TabNavigator.Screen = Tab.Screen;
TabNavigator.Group = Tab.Group;
