import { createEffect, sample } from 'effector';
import { createGate } from 'effector-react';

import { nftModel } from '@entities/nft';
import { viewerModel } from '@entities/viewer';

export const pageGate = createGate();

sample({
    clock: pageGate.open,
    source: viewerModel.$viewer.map((viewer) => viewer?.address),
    filter: Boolean,
    fn: (address) => address,
    target: createEffect((adress: string) => {
        nftModel.getWalletNfts(adress);
    }),
});
