import { $connector } from './connector';

export const $account = $connector.map((connector) => {
    if (connector?.connected) {
        return {
            address: connector.accounts[0],
            isConnected: connector.connected,
        };
    }

    return null;
});

export const $isConnected = $account.map((account) => !!account?.isConnected);
