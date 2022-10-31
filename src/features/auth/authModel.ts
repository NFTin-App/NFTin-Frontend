import { attach, createEffect, createEvent, forward, sample } from 'effector';

import { Viewer, viewerModel } from '@entities/viewer';
import { linkLensProfileToAddressFx as linkLensProfileToAddressFxApi } from '@shared/api/nftinContract';
import { POLYGON_CHAIN_ID } from '@shared/lib';
import { Nullable, ProfileId } from '@shared/types';
import { combineEvents, delay } from 'patronum';

const linkLensProfileToAddressFx = attach({ effect: linkLensProfileToAddressFxApi });

export const connectWalletFx = attach({
    source: viewerModel.$connector,
    effect: async (connector) => {
        connector?.connect({ chainId: POLYGON_CHAIN_ID });
    },
});

export const killWalletSessonFx = attach({
    source: viewerModel.$connector,
    effect: (connector) => {
        connector?.killSession();
    },
});

export const linkLensProfileToAddressDone = linkLensProfileToAddressFx.doneData;
export const linkLensProfileToAddressPending = linkLensProfileToAddressFx.pending;

export const linkLensProfileToAddress = createEvent<ProfileId>();

sample({
    clock: linkLensProfileToAddress,
    fn: (profileId) => ({ profileId }),
    target: linkLensProfileToAddressFx,
});

// TODO обработка завершение контракта
sample({
    clock: delay({ timeout: 30000, source: linkLensProfileToAddressFx.doneData }),
    source: linkLensProfileToAddressFx.doneData,
    target: viewerModel.getViewerProfileId,
});
