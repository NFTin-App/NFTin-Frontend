import { setContractFx } from '@shared/api/nftinContract';
import { Nullable, Signer } from '@shared/types';
import { createEvent, createStore, sample } from 'effector';
import { $provider, providerInited } from './provider';

export const signerInited = createEvent<Signer>();

export const $signer = createStore<Nullable<Signer>>(null);

sample({
    clock: providerInited,
    fn: (provider) => provider.getSigner(),
    target: [$signer, signerInited],
});

sample({
    clock: signerInited,
    source: $signer,
    filter: (signer) => !!signer,
    target: setContractFx,
});
