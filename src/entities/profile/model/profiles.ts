import { Address, Nullable } from '@shared/types';
import { attach, createEvent, createStore, restore, sample } from 'effector';
import { getProfilesFx as getProfilesFxApi } from '@shared/api/lens';
import { ProfileItem } from '../profileTypes';

const getProfilesFx = attach({
    effect: getProfilesFxApi,
});

export const $profiles = createStore<ProfileItem[]>([]);

export const getProfiles = createEvent<Address>();

export const getProfilesFxFinished = getProfilesFx.doneData;

sample({
    clock: getProfiles,
    fn: (address) => ({ address, queryParams: ['handle', 'id'] }),
    target: getProfilesFx,
});

sample({
    clock: getProfilesFx.doneData,
    fn: (profiles) => profiles ?? [],
    target: $profiles,
});
