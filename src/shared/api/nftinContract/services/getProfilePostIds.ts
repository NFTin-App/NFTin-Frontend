import { BigNumber } from 'ethers';

import { ProfileId } from '@shared/types';

import { attachContract } from '../connect';

interface GetProfileIdParams {
    profileId: ProfileId;
}

export const getProfilePostIdsFx = attachContract<GetProfileIdParams, string[]>(
    async ({ contract, profileId }) => {
        const postsId: BigNumber[] = await contract.getPostList(profileId);

        return postsId.map((id) => id.toHexString());
    }
);
