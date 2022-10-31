import { attach, createEffect, createEvent, createStore, forward, sample } from 'effector';

import { getProfileIdFx as getProfileIdFxApi } from '@shared/api/nftinContract';
import { Address, Connector, Nullable, Signer } from '@shared/types';

import { Viewer } from '../viewerTypes';

import { $connector, connectorInited } from './connector';
import { combineEvents, debug } from 'patronum';
import { signerInited } from './signer';

const getViewerProfileIdFx = attach({ effect: getProfileIdFxApi });

export const viewerInited = createEvent();

const initViewerFx = createEffect((connector: Connector) => ({
    address: connector.accounts[0],
    isConnected: connector.connected,
    profileId: null,
}));

export const $viewer = createStore<Nullable<Viewer>>(null);

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
