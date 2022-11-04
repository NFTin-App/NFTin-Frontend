import { createEffect } from 'effector';
import { selectFields } from 'gqty';

import { query, resolved } from '../generated';
import { QueryParams } from '../types';

interface GetProfilesParams extends QueryParams {
    address: string;
}

export const getProfilesFx = createEffect(
    async ({ address, queryParams }: GetProfilesParams) =>
        await resolved(() => {
            const profiles = query.profiles({
                request: { ownedBy: [address] },
            });

            if (!profiles) return null;

            return selectFields(profiles.items, queryParams);
        })
);
