import { ActionResponse, Nullable } from '@shared/types';

import { Nftin } from '../nftinContract/generated';

export type Params<T> = {
    contract: Nullable<Nftin>;
} & T;

export type EffectParams<T> = {
    contract: Nftin;
} & T;

export type Callback<Done, Param> = (param: EffectParams<Param>) => ActionResponse<Done>;
