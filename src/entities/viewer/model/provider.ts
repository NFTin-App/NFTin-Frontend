import { createEffect, createEvent, createStore, forward, sample } from 'effector';
import { ethers } from 'ethers';

import { setContractFx } from '@shared/api/nftinContract';
import { MUMBAI_RPC_URI, POLYGON_CHAIN_ID } from '@shared/lib';
import { Connector, Nullable, Provider } from '@shared/types';
import WalletConnectProvider from '@walletconnect/web3-provider';

import { $connector, connectorInited } from './connector';

export const providerInited = createEvent<Provider>();

const initProviderFx = createEffect(async (connector: Connector) => {
    const provider = new WalletConnectProvider({
        // TODO .env
        infuraId: '',
        connector,
        pollingInterval: 1000,
        chainId: POLYGON_CHAIN_ID,
        rpc: {
            [POLYGON_CHAIN_ID]: MUMBAI_RPC_URI,
        },
    });

    await provider.enable();

    return new ethers.providers.Web3Provider(provider);
});

export const $provider = createStore<Nullable<Provider>>(null);

sample({
    clock: connectorInited,
    filter: (connector) => !!connector.connected,
    target: initProviderFx,
});

sample({
    clock: initProviderFx.doneData,
    target: [$provider, providerInited],
});
