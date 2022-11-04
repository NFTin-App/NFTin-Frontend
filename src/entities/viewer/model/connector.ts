import { createEvent, restore } from 'effector';

import { Connector } from '@shared/types';

export const connectorInited = createEvent<Connector>();

export const $connector = restore(connectorInited, null);
