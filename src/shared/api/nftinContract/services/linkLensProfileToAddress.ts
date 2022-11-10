import { attachContract } from '../connect';

interface LinkLensProfileAddressParams {
    profileId: string;
}

export const linkLensProfileToAddressFx = attachContract<LinkLensProfileAddressParams>(
    async ({ contract, profileId }) => {
        const tx = await contract.functions.onboardNewProfile(profileId);

        await tx.wait();
    }
);
