import { createEffect, createEvent, sample } from 'effector';
import { createGate } from 'effector-react';
import { combineEvents, condition } from 'patronum';

import { navigationModel } from '@entities/navigation';
import { viewerModel } from '@entities/viewer';
import { RootStackParamList } from '@shared/types';

const appInited = combineEvents({ events: [viewerModel.providerInited, viewerModel.viewerInited] });

export const pageGate = createGate('loading');

const redirectToConnect = createEvent();
const redirectToProfile = createEvent();

const navigate = (screen: keyof RootStackParamList) => {
    return createEffect(() => {
        navigationModel.resetNavigateFx(screen);
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
    target: navigate('Tabs'),
});
