import { Connector } from '@shared/types';
import { createEvent, restore } from 'effector';
import { debug } from 'patronum';

export const connectorInited = createEvent<Connector>();

export const $connector = restore(connectorInited, null);
