import { createEffect, createEvent, forward, sample } from 'effector';
import { createGate } from 'effector-react';
import { combineEvents, condition, debug } from 'patronum';

import { profileModel } from '@entities/profile';
import { viewerModel } from '@entities/viewer';
import { Navigation, Nullable } from '@shared/types';

type ProfileNavigation = Navigation<'Profile'>;

export const pageGate = createGate<ProfileNavigation>('profile');

const isValidProfile = (profileId: Nullable<string>) => {
    // TODO сделать более стабильную проверку на наличие профиля
    return !!profileId && profileId !== '0x00';
};

const redirectToConnect = createEvent();
const getViewerProfile = createEvent();

const navigationInited = createEvent<ProfileNavigation>();

// TODO запилить отдельный стор для навигатора и просто использовать его
sample({
    clock: pageGate.state.map((navigation) => navigation),
    filter: Boolean,
    target: navigationInited,
});

condition({
    source: viewerModel.getViewerProfileIdDone,
    if: isValidProfile,
    then: getViewerProfile,
    else: redirectToConnect,
});

sample({
    clock: combineEvents({ events: [navigationInited, redirectToConnect] }),
    source: pageGate.state,
    target: createEffect((navigation: ProfileNavigation) => {
        navigation.navigate('ConnectLensProfile');
    }),
});

sample({
    clock: viewerModel.getViewerProfileIdDone,
    target: profileModel.getProfile,
});
