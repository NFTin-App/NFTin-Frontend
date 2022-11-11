import { attachContract } from '../connect';

interface SetDispatcherParams {
    profileId: string;
}

export const setDispatcherFx = attachContract<SetDispatcherParams>(
    async ({ contract, profileId }) => {
        // TODO NFTin adddress to .env
        const tx = await contract.functions.setDispatcher(
            profileId,
            '0x4606A0AF6669eC3d591123b537E91085874DB0a6'
        );

        await tx.wait();
    }
);
