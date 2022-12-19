import { BigNumber } from 'ethers';

import { Address } from '@shared/types';

import { attachContract } from '../connect';

interface GetProfileIdParams {
    address: Address;
}

export const getProfileIdFx = attachContract<GetProfileIdParams, string>(
    async ({ contract, address }) => {
        const profile: BigNumber = await contract.getProfile(address);

        return profile.toHexString();
    }
);
