import { Address, ProfileId } from '@shared/types';
import { BigNumber } from 'ethers';

import { attachContract } from '../connect';

interface GetProfileRating {
    profileId: ProfileId;
}

export const getProfileRating = attachContract<GetProfileRating>(
    async ({ contract, profileId }) => {
        const profile: BigNumber = await contract.getRating(profileId);
        console.log(profile);
        // return profile.toHexString();
    }
);
