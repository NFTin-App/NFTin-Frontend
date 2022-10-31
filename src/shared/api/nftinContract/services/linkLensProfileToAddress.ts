import { ContractTransaction } from 'ethers';
import { attachContract } from '../connect';

interface LinkLensProfileAddressParams {
    profileId: string;
}

export const linkLensProfileToAddressFx = attachContract<LinkLensProfileAddressParams>(
    async ({ contract, profileId }) => {
        await contract.functions.onboardNewProfile(profileId);
    }
);
