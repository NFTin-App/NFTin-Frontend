import { FC, useCallback } from 'react';
import { useEvent } from 'effector-react';

import { navigationModel } from '@entities/navigation';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '@shared/types';

export const withNavigation = (Component: FC) => () => {
    const navigationRef = useNavigationContainerRef<RootStackParamList>();
    const initNavigation = useEvent(navigationModel.navigationInited);

    const onNavigationInit = useCallback(() => {
        initNavigation(navigationRef);
    }, [initNavigation, navigationRef]);

    return (
        <NavigationContainer ref={navigationRef} onReady={onNavigationInit}>
            <Component />
        </NavigationContainer>
    );
};
