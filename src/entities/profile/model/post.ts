import { getPostsFx as getPostsFxApi } from '@shared/api/lensHubContract';
import { getProfilePostIdsFx as getProfilePostIdsFxApi } from '@shared/api/nftinContract';
import { ProfileId } from '@shared/types';
import { attach, createEvent, createStore, sample } from 'effector';
import { debug } from 'patronum';
import { $profile } from './profile';

const getPostsFx = attach({ effect: getPostsFxApi });
const getProfilePostIdsFx = attach({ effect: getProfilePostIdsFxApi });

export const $posts = createStore<any>(null);

export const getPosts = createEvent<ProfileId>();

sample({
    clock: getPosts,
    fn: (profileId) => ({ profileId }),
    target: getProfilePostIdsFx,
});

sample({
    clock: getProfilePostIdsFx.doneData,
    source: $profile.map((profile) => profile?.id || null),
    filter: (profileId, postIds) => !!postIds.length && !!profileId,
    fn: (profileId, postIds) => ({ profileId, postIds, queryParams: '*' }),
    target: getPostsFx as any, // TODO any
});

debug(getPosts, getPostsFx.doneData, getPostsFx);
