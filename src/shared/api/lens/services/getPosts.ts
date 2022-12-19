import { createEffect } from 'effector';
import { selectFields } from 'gqty';

import { ProfileId } from '@shared/types';

import { query, resolved } from '../generated';
import { QueryParams } from '../types';

interface GetPostsByIds extends QueryParams {
    postIds: string[];
    profileId: ProfileId;
}

export const getPostsFx = createEffect(
    async ({ queryParams }: GetPostsByIds) =>
        await resolved(() => {
            const posts = query.publications({
                request: {
                    // profileId,
                    // limit: 10,
                    publicationIds: ['0x4fb4-0x01'],
                    // publicationIds: postIds.map((postId) => `${profileId}-${postId}`),
                },
            });

            if (!posts) return null;

            return selectFields(posts, queryParams);
        })
);

// TODO DELETE OR FIX
