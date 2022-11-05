import { createEvent, restore } from 'effector';
import { debug } from 'patronum';

import { Connector } from '@shared/types';

export const connectorInited = createEvent<Connector>();

export const $connector = restore(connectorInited, null);

debug(connectorInited);
