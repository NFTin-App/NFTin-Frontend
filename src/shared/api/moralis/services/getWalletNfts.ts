import { POLYGON_CHAIN_ID } from '@shared/lib';
import { Address } from '@shared/types';
import { createEffect } from 'effector';
import Moralis from 'moralis';

export const getWalletNftsFx = createEffect(async (address: Address) => {
    const res = await Moralis.EvmApi.nft.getWalletNFTs({
        address,
        chain: POLYGON_CHAIN_ID,
    });

    return res.raw.result;
});
