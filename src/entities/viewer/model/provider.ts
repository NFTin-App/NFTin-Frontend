import { createEffect, createEvent, createStore, sample } from 'effector';
import { ethers } from 'ethers';

import { MUMBAI_RPC_URI, POLYGON_CHAIN_ID } from '@shared/lib';
import { Connector, Nullable, Provider } from '@shared/types';
import WalletConnectProvider from '@walletconnect/web3-provider';

import { connectorInited } from './connector';

export const providerInited = createEvent<Provider>();

const initProviderFx = createEffect(async (connector: Connector) => {
    const provider = new WalletConnectProvider({
        // TODO .env
        infuraId: 'f5cef58c96844c46a1388f7143ecc6d4',
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
    filter: (connector) => connector.connected,
    target: initProviderFx,
});

sample({
    clock: initProviderFx.doneData,
    target: [$provider, providerInited],
});
