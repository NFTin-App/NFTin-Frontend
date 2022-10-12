import { attach } from 'effector';

import { viewerModel } from '@entities/viewer';

export const connectWalletFx = attach({
    source: viewerModel.$connector,
    effect: (connector) => {
        connector?.connect();
    },
});

export const killWalletSessonFx = attach({
    source: viewerModel.$connector,
    effect: (connector) => {
        connector?.killSession();
    },
});
