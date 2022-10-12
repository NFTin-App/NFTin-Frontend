import { createEvent, restore } from 'effector';

import Walletconnect from '@walletconnect/client';

export const initConnector = createEvent<Walletconnect>();

export const $connector = restore(initConnector, null);
