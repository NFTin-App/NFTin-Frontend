import { BigNumber } from 'ethers';

import { ProfileId } from '@shared/types';

import { attachContract } from '../connect';

interface GetProfileRating {
    profileId: ProfileId;
}

export const getProfileRating = attachContract<GetProfileRating>(
    async ({ contract, profileId }) => {
        await contract.getRating(profileId);

        // return profile.toHexString();
    }
);
