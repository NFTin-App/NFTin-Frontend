import { FC } from 'react';
import { createEvent, forward, sample } from 'effector';
import { createGate, useGate } from 'effector-react';
import { combineEvents, condition } from 'patronum';

import { viewerModel } from '@entities/viewer';
import { Connector } from '@shared/types';

const appGate = createGate('viewer');

const viewerInitReady = createEvent();

const updateViewerConnectorData = createEvent<Connector>();

forward({
    from: appGate.open,
    to: viewerModel.initGuestFx,
});

condition({
    source: viewerModel.connectorInited,
    if: (connector) => connector.connected,
    then: updateViewerConnectorData,
    else: viewerModel.viewerInited,
});

sample({
    clock: updateViewerConnectorData,
    fn: (connector) => ({
        address: connector.accounts[0],
        isConnected: connector.connected,
        profileId: null,
    }),
    target: [viewerModel.$viewer, viewerInitReady],
});

condition({
    source: combineEvents({
        events: [viewerModel.signerInited, viewerInitReady],
    }),
    if: viewerModel.$isGuest.getState,
    then: viewerModel.viewerInited,
    else: viewerModel.getViewerProfileId,
});

export const withAuth = (Component: FC) => () => {
    useGate(appGate);

    return <Component />;
};
