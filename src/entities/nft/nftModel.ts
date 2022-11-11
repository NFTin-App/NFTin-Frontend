import { getWalletNftsFx as getWalletNftsFxApi } from '@shared/api/moralis';
import { LENS_TOKEN_ADDRESS } from '@shared/lib';
import { Address, Nullable } from '@shared/types';
import { attach, createEvent, createStore, restore, sample } from 'effector';
import { debug } from 'patronum';
import { Nft } from './nftTypes';

const getWalletNftsFx = attach({ effect: getWalletNftsFxApi });

export const $nfts = createStore<Nullable<Nft[]>>(null);

export const getWalletNfts = createEvent<Address>();

sample({
    clock: getWalletNfts,
    target: getWalletNftsFx,
});
debug(getWalletNftsFx.doneData);
sample({
    clock: getWalletNftsFx.doneData,
    filter: Boolean,
    fn: (nfts) => {
        const currentNfts = nfts?.filter((nft) => nft.token_address !== LENS_TOKEN_ADDRESS) || [];

        const mappedNfts = currentNfts.map((nft) => ({
            name: nft.name,
            tokenAddress: nft.token_address,
            tokenId: nft.token_id,
            tokenURI: nft.token_uri ?? null,
        }));

        return mappedNfts;
    },
    target: $nfts,
});
