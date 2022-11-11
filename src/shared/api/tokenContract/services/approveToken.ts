import { attachContract } from '../connect';

export const approveTokenFx = attachContract<void>(async ({ contract }) => {
    // TODO NFTin address .env
    const tx = await contract.functions.approve(
        '0x4606a0af6669ec3d591123b537e91085874db0a6',
        (1000000 * 10) ^ 18
    );

    await tx.wait();
});
