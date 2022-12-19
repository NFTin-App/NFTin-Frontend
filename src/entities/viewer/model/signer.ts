import { createEvent, createStore, sample } from 'effector';

import { setLensHubContractFx } from '@shared/api/lensHubContract';
import { setNftinContractFx } from '@shared/api/nftinContract';
import { setTokenContractFx } from '@shared/api/tokenContract';
import { Nullable, Signer } from '@shared/types';

import { providerInited } from './provider';

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
    target: [setNftinContractFx, setTokenContractFx, setLensHubContractFx],
});
