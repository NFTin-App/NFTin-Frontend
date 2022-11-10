import { createEffect, createEvent, restore, sample } from 'effector';
import { createGate } from 'effector-react';
import { condition } from 'patronum';

import { profileModel } from '@entities/profile';
import { isValidProfile, viewerModel } from '@entities/viewer';
import { Connector, Nullable } from '@shared/types';

import { ProfileStatus } from './profileTypes';

export const updateProfileStatus = createEvent<ProfileStatus>();

export const $profileStatus = restore(updateProfileStatus, 'loading');

export const pageGate = createGate<boolean>('profile');

const onGetProfile = createEvent<string>();

condition({
    source: viewerModel.getViewerProfileIdFinished,
    if: isValidProfile,
    then: onGetProfile,
    else: createEffect(() => {
        updateProfileStatus('needLensProfile');
    }),
});

sample({
    clock: onGetProfile,
    target: [
        profileModel.getProfile,
        createEffect(() => {
            updateProfileStatus('loading');
        }),
    ],
});

sample({
    clock: profileModel.getProfileFinished,
    target: createEffect(() => {
        updateProfileStatus('done');
    }),
});

const updateProfileStatusFx = createEffect(
    ([connector, isPending]: [Nullable<Connector>, boolean]) => {
        if (isPending) {
            updateProfileStatus('loading');
        }

        if (connector !== null && !connector?.connected) {
            return updateProfileStatus('needWalletConnect');
        }
    }
);

sample({
    clock: [pageGate.state, viewerModel.$connector, viewerModel.$isGetViewerProfileIdPending],
    source: {
        connector: viewerModel.$connector,
        isPending: viewerModel.$isGetViewerProfileIdPending,
    },
    filter: (_, isFocused) => !!isFocused,
    fn: ({ connector, isPending }) => [connector, isPending] as const,
    target: updateProfileStatusFx,
});
