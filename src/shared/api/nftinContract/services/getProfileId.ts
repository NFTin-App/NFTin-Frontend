import { BigNumber } from 'ethers';

import { attachContract } from '../connect';

interface GetProfileIdParams {
    address: string;
}

export const getProfileIdFx = attachContract<GetProfileIdParams, string>(
    async ({ contract, address }) => {
        const profile: BigNumber = await contract.getProfile(address);

        return profile.toHexString();
    }
);
