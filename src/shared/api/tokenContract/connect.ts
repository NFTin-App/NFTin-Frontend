import { attach, createEffect, createStore, sample } from 'effector';

import { Nullable, Signer } from '@shared/types';

import { CONTRACT_ADDRESS } from './config';
import { Token, Token__factory } from './generated';
import { Callback, EffectParams, Params } from './types';

// TODO DRY

export const setTokenContractFx = createEffect((signer: Nullable<Signer>) => {
    return signer ? Token__factory.connect(CONTRACT_ADDRESS, signer) : null;
});

const $contract = createStore<Nullable<Token>>(null);

sample({
    clock: setTokenContractFx.doneData,
    target: $contract,
});

export const attachContract = <Param, Done = void>(callback: Callback<Done, Param>) => {
    const actionFx = createEffect(callback);

    return attach({
        source: $contract,
        mapParams: (param: Param, contract): Params<Param> => {
            return { contract, ...param };
        },
        effect: createEffect(async (params: Params<Param>) => {
            if (params.contract) {
                return await actionFx(params as EffectParams<Param>);
            }

            // TODO сделать нормальную обработку ошибок
            console.error('Signer is not defined', params);
            throw new Error('Signer is not defined');
        }),
    });
};
