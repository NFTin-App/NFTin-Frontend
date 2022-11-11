import { attach, createEvent, createStore, sample } from 'effector';
import { combineEvents, debug } from 'patronum';

import { getProfileIdFx as getProfileIdFxApi } from '@shared/api/nftinContract';
import { Nullable } from '@shared/types';

import { isValidProfile } from '../lib';
import { Viewer } from '../viewerTypes';

const getViewerProfileIdFx = attach({ effect: getProfileIdFxApi });

export const resetViewer = createEvent();
export const viewerInited = createEvent();

export const $viewer = createStore<Nullable<Viewer>>(null).reset(resetViewer);
export const $isLensConnected = $viewer.map((viewer) => isValidProfile(viewer?.profileId ?? null));

export const getViewerProfileId = createEvent();
export const getViewerProfileIdFinished = getViewerProfileIdFx.doneData;
export const $isGetViewerProfileIdPending = getViewerProfileIdFx.pending;
debug(getViewerProfileIdFx.doneData);
sample({
    clock: getViewerProfileId,
    source: $viewer,
    filter: Boolean,
    fn: ({ address }) => ({ address }),
    target: getViewerProfileIdFx,
});

sample({
    clock: getViewerProfileIdFx.doneData,
    source: $viewer,
    filter: Boolean,
    fn: (viewer, profileId) => ({ ...viewer, profileId }),
    target: $viewer,
});

sample({
    clock: combineEvents({ events: [getViewerProfileIdFx.doneData] }),
    source: $viewer,
    filter: Boolean,
    target: viewerInited,
});
