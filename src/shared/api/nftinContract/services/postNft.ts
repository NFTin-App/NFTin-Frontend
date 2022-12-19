import { attachContract } from '../connect';

interface GetProfileIdParams {
    profileId: string;
    contentURI: string;
    nftAddress: string;
    tokenId: string;
}

const bytesTrue = '0x0000000000000000000000000000000000000000000000000000000000000001';
const freeCollectModule = '0x0BE6bD7092ee83D44a6eC1D949626FeE48caB30c';
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export const postNftFx = attachContract<GetProfileIdParams>(
    async ({ contract, contentURI, profileId, nftAddress, tokenId }) => {
        const tx = await contract.functions.setPost(
            {
                collectModule: freeCollectModule,
                collectModuleInitData: bytesTrue,
                contentURI,
                profileId,
                referenceModule: ZERO_ADDRESS,
                referenceModuleInitData: [],
            },
            nftAddress,
            tokenId,
            0,
            {
                gasLimit: 500000,
            }
        );

        await tx.wait();
    }
);
