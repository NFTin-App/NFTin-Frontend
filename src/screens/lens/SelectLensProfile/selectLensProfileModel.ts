import { attach, createEffect, createEvent, createStore, restore, sample } from 'effector';
import { createGate } from 'effector-react';
import { combineEvents, delay } from 'patronum';

import { viewerModel } from '@entities/viewer';
import { authModel } from '@features/auth';
import { getProfilesFx as getProfilesFxApi } from '@shared/api/lens';
import { Navigation } from '@shared/types';

import { ProfileItem } from './selectProfileTypes';

const getProfilesFx = attach({
    effect: getProfilesFxApi,
});

type ProfileNavigation = Navigation<'SelectLensProfile'>;

export const updateProfileId = createEvent<string>();

export const $profileId = restore(updateProfileId, null);

export const pageGate = createGate<ProfileNavigation>('profile');

sample({
    clock: pageGate.open,
    source: viewerModel.$viewer,
    filter: Boolean,
    fn: (store) => ({ address: store.address, queryParams: ['handle', 'id'] }),
    target: getProfilesFx,
});

export const $profiles = createStore<ProfileItem[]>([]);

sample({
    clock: getProfilesFx.doneData,
    fn: (profiles) => profiles ?? [],
    target: $profiles,
});

sample({
    // TODO обработка завершение контракта
    clock: combineEvents({
        events: [
            delay({ timeout: 30000, source: authModel.linkLensProfileToAddressDone }),
            viewerModel.getViewerProfileIdDone,
        ],
    }),
    source: pageGate.state,
    target: createEffect((navigation: ProfileNavigation) => {
        navigation.navigate('Profile');
    }),
});
