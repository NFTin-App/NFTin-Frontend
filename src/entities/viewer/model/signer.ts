import { createEvent, createStore, sample } from 'effector';

import { setNftinContractFx } from '@shared/api/nftinContract';
import { Nullable, Signer } from '@shared/types';

import { providerInited } from './provider';
import { setTokenContractFx } from '@shared/api/tokenContract';
import { setLensHubContractFx } from '@shared/api/lensHubContract';

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
