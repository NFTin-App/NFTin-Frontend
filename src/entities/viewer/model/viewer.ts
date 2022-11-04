import { attach, createEffect, createEvent, createStore, sample } from 'effector';
import { combineEvents, debug } from 'patronum';

import { getProfileIdFx as getProfileIdFxApi } from '@shared/api/nftinContract';
import { Connector, Nullable } from '@shared/types';

import { Viewer } from '../viewerTypes';

import { connectorInited } from './connector';
import { signerInited } from './signer';

const getViewerProfileIdFx = attach({ effect: getProfileIdFxApi });

export const viewerInited = createEvent();

const initViewerFx = createEffect((connector: Connector) => ({
    address: connector.accounts[0],
    isConnected: connector.connected,
    profileId: null,
}));

export const $viewer = createStore<Nullable<Viewer>>(null);
export const $isConnected = $viewer.map((viewer) => !!viewer?.isConnected);

sample({
    clock: connectorInited,
    target: initViewerFx,
});

sample({
    clock: initViewerFx.doneData,
    target: $viewer,
});

export const getViewerProfileId = createEvent();

export const getViewerProfileIdDone = getViewerProfileIdFx.doneData;

sample({
    clock: getViewerProfileId,
    source: $viewer,
    filter: Boolean,
    fn: ({ address }) => ({ address }),
    target: getViewerProfileIdFx,
});

sample({
    clock: signerInited,
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
    target: viewerInited,
});

debug(viewerInited);
