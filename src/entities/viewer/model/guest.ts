import { createEffect, createEvent, restore } from 'effector';
import { sample } from 'lodash';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const initGuestFx = createEffect(async (): Promise<boolean> => {
    const isGuest = await AsyncStorage.getItem('isGuest');

    return isGuest === null ? false : JSON.parse(isGuest);
});

export const updateGuestFx = createEffect(async (isGuest: boolean) => {
    try {
        await AsyncStorage.setItem('isGuest', JSON.stringify(isGuest));

        return isGuest;
    } catch (e) {
        return false;
    }
});

const guestUpdated = createEvent<boolean>();
export const $isGuest = restore(guestUpdated, false);

export const guestInited = initGuestFx.doneData;

sample({
    clocl: [updateGuestFx.doneData, initGuestFx.doneData],
    target: guestUpdated,
});
