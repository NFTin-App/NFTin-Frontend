import { ProfileId } from '@shared/types';
import { BigNumber } from 'ethers';

import { attachContract } from '../connect';

interface GetProfileIdParams {
    profileId: ProfileId;
}

export const getProfilePostIdsFx = attachContract<GetProfileIdParams, string[]>(
    async ({ contract, profileId }) => {
        const postsId: BigNumber[] = await contract.getPostList(profileId);
        console.log(postsId);

        return postsId.map((id) => id.toHexString());
    }
);
