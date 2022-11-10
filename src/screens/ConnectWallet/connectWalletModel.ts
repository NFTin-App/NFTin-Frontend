import { createEffect, createEvent, forward, sample } from 'effector';
import { createGate } from 'effector-react';

import { createResetNavigateFx } from '@entities/navigation/navigatonModel';
import { viewerModel } from '@entities/viewer';
import { Connector } from '@shared/types';

export const pageGate = createGate('connectWallet');

const navigateToProfile = createEvent();

forward({
    from: navigateToProfile,
    to: createResetNavigateFx('Tabs', { screen: 'Profile' }),
});

sample({
    clock: [viewerModel.connectorInited, pageGate.open],
    source: viewerModel.$connector,
    filter: Boolean,
    target: createEffect((connector: Connector) => {
        connector.on('connect', (error) => {
            if (error) {
                throw error;
            } else {
                navigateToProfile();
            }
        });
    }),
});
