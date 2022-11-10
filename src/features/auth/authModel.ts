import { attach, createEffect, createEvent, sample } from 'effector';

import { viewerModel } from '@entities/viewer';
import { linkLensProfileToAddressFx as linkLensProfileToAddressFxApi } from '@shared/api/nftinContract';
import { POLYGON_CHAIN_ID } from '@shared/lib';
import { ProfileId } from '@shared/types';

const linkLensProfileToAddressFx = attach({ effect: linkLensProfileToAddressFxApi });

export const connectWalletFx = attach({
    source: viewerModel.$connector,
    effect: (connector) => {
        connector?.connect({ chainId: POLYGON_CHAIN_ID });
    },
});

export const killWalletSessonFx = attach({
    source: viewerModel.$connector,
    effect: async (connector) => {
        await connector?.killSession();
        viewerModel.updateGuestFx(true);
        viewerModel.resetViewer();
    },
});

export const linkLensProfileToAddressDone = linkLensProfileToAddressFx.doneData;

export const linkLensProfileToAddress = createEvent<ProfileId>();

sample({
    clock: linkLensProfileToAddress,
    fn: (profileId) => ({ profileId }),
    target: linkLensProfileToAddressFx,
});

sample({
    source: linkLensProfileToAddressFx.doneData,
    target: [
        viewerModel.getViewerProfileId,
        createEffect(() => {
            viewerModel.updateGuestFx(false);
        }),
    ],
});
