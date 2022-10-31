import { createEffect, createEvent, sample } from 'effector';
import { createGate } from 'effector-react';
import { combineEvents, condition } from 'patronum';

import { viewerModel } from '@entities/viewer';
import { Navigation, RootStackParamList } from '@shared/types';

type LoadingNavigation = Navigation<'Loading'>;

const appInited = combineEvents({ events: [viewerModel.providerInited, viewerModel.viewerInited] });

export const pageGate = createGate<LoadingNavigation>('loading');

const redirectToConnect = createEvent();
const redirectToProfile = createEvent();

const navigate = (screen: keyof RootStackParamList) => {
    return createEffect((navigation: LoadingNavigation) => {
        navigation.navigate(screen);
    });
};

condition({
    source: viewerModel.connectorInited,
    if: (connector) => !!connector?.connected,
    then: redirectToProfile,
    else: redirectToConnect,
});

sample({
    clock: redirectToConnect,
    source: pageGate.state,
    target: navigate('ConnectWallet'),
});

sample({
    clock: combineEvents({
        events: [redirectToProfile, appInited],
    }),
    source: pageGate.state,
    target: navigate('Profile'),
});
