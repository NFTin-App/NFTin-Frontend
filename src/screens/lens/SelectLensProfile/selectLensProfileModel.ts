import { createEffect, createEvent, restore, sample } from 'effector';
import { createGate } from 'effector-react';
import { combineEvents } from 'patronum';

import { profileModel } from '@entities/profile';
import { viewerModel } from '@entities/viewer';
import { authModel } from '@features/auth';
import { Navigation } from '@shared/types';

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
    clock: combineEvents({
        events: [authModel.linkLensProfileToAddressDone, viewerModel.getViewerProfileIdFinished],
    }),
    source: pageGate.state,
    target: createEffect((navigation: ProfileNavigation) => {
        navigation.navigate('Profile');
    }),
});
