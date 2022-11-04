import { profileModel } from '@entities/profile';
import { viewerModel } from '@entities/viewer';
import { sample } from 'effector';
import { createGate } from 'effector-react';
import { combineEvents } from 'patronum';

export const pageGate = createGate('connectLensProfile');

sample({
    clock: pageGate.open,
    source: viewerModel.$viewer.map((viewer) => viewer?.address),
    filter: Boolean,
    target: profileModel.getProfiles,
});

export const $isUnavailableProfiles = profileModel.$profiles.map((profiles) => !profiles.length);
