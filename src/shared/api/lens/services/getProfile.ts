import { createEffect } from 'effector';
import { selectFields } from 'gqty';

import { query, resolved } from '../generated';
import { QueryParams } from '../types';

interface GetProfileParams extends QueryParams {
    profileId: string;
}

export const getProfileFx = createEffect(
    async ({ profileId, queryParams }: GetProfileParams) =>
        await resolved(() => {
            const profile = query.profile({
                request: { profileId },
            });

            if (!profile) return null;

            return selectFields(profile, queryParams);
        })
);
