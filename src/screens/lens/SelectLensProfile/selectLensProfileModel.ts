import { createEvent, restore, sample } from 'effector';
import { createGate } from 'effector-react';
import { combineEvents } from 'patronum';

import { navigationModel } from '@entities/navigation';
import { profileModel } from '@entities/profile';
import { viewerModel } from '@entities/viewer';
import { authModel } from '@features/auth';

export const pageGate = createGate('selectLensProfile');

export const updateProfileId = createEvent<string>();

export const $profileId = restore(updateProfileId, null);

sample({
    clock: pageGate.open,
    source: viewerModel.$viewer.map((viewer) => viewer?.address),
    filter: Boolean,
    target: profileModel.getProfiles,
});

const lensProfileLinked = combineEvents({
    events: [authModel.linkLensProfileToAddressDone, viewerModel.getViewerProfileIdFinished],
});

sample({
    clock: lensProfileLinked,
    target: navigationModel.createResetNavigateFx('Tabs', { screen: 'Profile' }),
});
