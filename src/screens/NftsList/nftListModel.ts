import { nftModel } from '@entities/nft';
import { viewerModel } from '@entities/viewer';
import { createEffect, sample } from 'effector';
import { createGate } from 'effector-react';

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
