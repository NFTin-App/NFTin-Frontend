import { FC } from 'react';
import { useEvent } from 'effector-react';

import { navigationModel } from '@entities/navigation';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '@shared/types';

export const withNavigation = (Component: FC) => () => {
    const navigationRef = useNavigationContainerRef<RootStackParamList>();
    const initNavigation = useEvent(navigationModel.initedNavigation);

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                initNavigation(navigationRef);
            }}
        >
            <Component />
        </NavigationContainer>
    );
};
