import { FC } from 'react';
import { createEvent, sample } from 'effector';
import { createGate, useGate } from 'effector-react';
import { combineEvents, condition } from 'patronum';

import { Navigation, navigationModel } from '@entities/navigation';
import { viewerModel } from '@entities/viewer';
import { Connector } from '@shared/types';

export const appGate = createGate('app init');

const appInited = combineEvents({
    events: [
        viewerModel.guestInited,
        viewerModel.connectorInited,
        navigationModel.navigationInited,
        viewerModel.viewerInited,
    ],
});

const redirectToApp = createEvent<[boolean, Connector, Navigation, void]>();
const redirectToConnect = createEvent();

condition({
    source: appInited,
    if: ([isGuest, connector]) => isGuest || connector?.connected,
    then: redirectToApp,
    else: redirectToConnect,
});

sample({
    clock: redirectToConnect,
    target: navigationModel.createResetNavigateFx('ConnectWallet'),
});

const redirectToHome = createEvent();
const redirectToProfile = createEvent();

condition({
    source: redirectToApp,
    if: ([isGuest]) => isGuest,
    then: redirectToHome,
    else: redirectToProfile,
});

sample({
    clock: redirectToHome,
    target: navigationModel.createResetNavigateFx('Tabs', { screen: 'Home' }),
});

sample({
    clock: redirectToProfile,
    target: navigationModel.createResetNavigateFx('Tabs', { screen: 'Profile' }),
});

export const withAppInit = (Component: FC) => () => {
    useGate(appGate);

    return <Component />;
};
