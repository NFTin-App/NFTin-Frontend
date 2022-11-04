import { attach, createEvent, createStore, sample } from 'effector';

import { getProfileFx as getProfileFxApi } from '@shared/api/lens';
import { getProfileIdFx as getProfileIdFxApi } from '@shared/api/nftinContract';
import { Address, Nullable, ProfileId } from '@shared/types';

import { Profile } from '../profileTypes';

const getProfileIdFx = attach({ effect: getProfileIdFxApi });
const getProfileFx = attach({ effect: getProfileFxApi });

export const $profile = createStore<Nullable<Profile>>(null);

export const getProfileId = createEvent<Address>();
export const getProfile = createEvent<ProfileId>();

sample({
    clock: getProfileId,
    fn: (address) => ({ address }),
    target: getProfileIdFx,
});

sample({
    clock: getProfile,
    fn: (profileId) => ({ profileId, queryParams: '*' as const }),
    target: getProfileFx,
});

sample({
    clock: getProfileIdFx.doneData,
    target: getProfile,
});

sample({
    clock: getProfileFx.doneData,
    filter: Boolean,
    fn: (profile) => ({
        handle: profile.handle,
        id: profile.id,
        bio: profile.bio,
        name: profile.name,
        picture: profile.picture,
    }),
    target: $profile,
});
