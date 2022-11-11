import { ActionResponse, Nullable } from '@shared/types';
import { LensHub } from './generated';

export type Params<T> = {
    contract: Nullable<LensHub>;
} & T;

export type EffectParams<T> = {
    contract: LensHub;
} & T;

export type Callback<Done, Param> = (param: EffectParams<Param>) => ActionResponse<Done>;
