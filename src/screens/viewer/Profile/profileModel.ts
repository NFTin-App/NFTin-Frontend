import { createEffect, createEvent, sample } from 'effector';
import { createGate } from 'effector-react';
import { condition } from 'patronum';

import { navigationModel } from '@entities/navigation';
import { profileModel } from '@entities/profile';
import { viewerModel } from '@entities/viewer';
import { Nullable } from '@shared/types';

export const pageGate = createGate('profile');

const isValidProfile = (profileId: Nullable<string>) => {
    // TODO сделать более стабильную проверку на наличие профиля
    return !!profileId && profileId !== '0x00';
};

const redirectToConnect = createEvent();
const getViewerProfile = createEvent();

condition({
    source: viewerModel.getViewerProfileIdFinished,
    if: isValidProfile,
    then: getViewerProfile,
    else: redirectToConnect,
});

sample({
    clock: redirectToConnect,
    target: createEffect(() => {
        navigationModel.resetNavigateFx('ConnectLensProfile');
    }),
});

sample({
    clock: viewerModel.getViewerProfileIdFinished,
    target: profileModel.getProfile,
});
