import { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';

export const withNavigation = (Component: FC) => () => {
    return (
        <NavigationContainer>
            <Component />
        </NavigationContainer>
    );
};
