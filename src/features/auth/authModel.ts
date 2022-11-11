import { attach, createEffect, createEvent, sample } from 'effector';

import { viewerModel } from '@entities/viewer';
import { linkLensProfileToAddressFx as linkLensProfileToAddressFxApi } from '@shared/api/nftinContract';
import { POLYGON_CHAIN_ID } from '@shared/lib';
import { ProfileId } from '@shared/types';
import { setDispatcherFx as setDispatcherFxApi } from '@shared/api/lensHubContract';
import { approveTokenFx } from '@shared/api/tokenContract';

const linkLensProfileToAddressFx = attach({ effect: linkLensProfileToAddressFxApi });
const setDispatcherFx = attach({ effect: setDispatcherFxApi });

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

export const initProfileFx = attach({
    mapParams: (profileId: string) => profileId,
    effect: createEffect(async (profileId: string) => {
        await setDispatcherFx({ profileId });
        await approveTokenFx();
        await linkLensProfileToAddressFx({ profileId });
    }),
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
