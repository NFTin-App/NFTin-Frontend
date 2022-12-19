import { attach } from 'effector';

import { nftModel } from '@entities/nft';
import { viewerModel } from '@entities/viewer';
import { postNftFx as postNftApi } from '@shared/api/nftinContract';

export const postNftFx = attach({
    source: { viewer: viewerModel.$viewer, nfts: nftModel.$nfts },
    mapParams: (tokenId: string, { nfts, viewer }) => {
        const nft = nfts?.find((nft) => nft.tokenId === tokenId)!;

        return {
            contentURI: nft.tokenURI || '',
            nftAddress: nft.tokenAddress,
            profileId: viewer?.profileId || '',
            tokenId,
        };
    },
    effect: postNftApi,
});

export const $postNftPending = postNftFx.pending;