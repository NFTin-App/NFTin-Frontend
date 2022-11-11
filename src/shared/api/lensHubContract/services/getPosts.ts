import { attachContract } from '../connect';

interface GetPosts {
    profileId: string;
    postIds: string[];
}

export const getPostsFx = attachContract<GetPosts, any>(
    async ({ contract, profileId, postIds }) => {
        const post = await contract.getPub(profileId, postIds[0]);

        return post;
    }
);
