import { attach, createEffect, createEvent, createStore, restore, sample } from 'effector';
import { createGate } from 'effector-react';
import { combineEvents, delay } from 'patronum';

import { viewerModel } from '@entities/viewer';
import { authModel } from '@features/auth';
import { getProfilesFx as getProfilesFxApi } from '@shared/api/lens';
import { Navigation } from '@shared/types';

import { profileModel } from '@entities/profile';

type ProfileNavigation = Navigation<'SelectLensProfile'>;

export const pageGate = createGate<ProfileNavigation>('selectLensProfile');

export const updateProfileId = createEvent<string>();

export const $profileId = restore(updateProfileId, null);

sample({
    clock: pageGate.open,
    source: viewerModel.$viewer.map((viewer) => viewer?.address),
    filter: Boolean,
    target: profileModel.getProfiles,
});

sample({
    // TODO обработка завершение контракта
    clock: combineEvents({
        events: [
            delay({ timeout: 30000, source: authModel.linkLensProfileToAddressDone }),
            viewerModel.getViewerProfileIdFinished,
        ],
    }),
    source: pageGate.state,
    target: createEffect((navigation: ProfileNavigation) => {
        navigation.navigate('Profile');
    }),
});
