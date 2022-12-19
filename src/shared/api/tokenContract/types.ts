import { ActionResponse, Nullable } from '@shared/types';

import { Token } from './generated';

export type Params<T> = {
    contract: Nullable<Token>;
} & T;

export type EffectParams<T> = {
    contract: Token;
} & T;

export type Callback<Done, Param> = (param: EffectParams<Param>) => ActionResponse<Done>;
