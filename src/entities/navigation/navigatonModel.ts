import { attach, createEffect, createEvent, restore } from 'effector';

import { Nullable } from '@shared/types';

import { Navigation, ScreenItem } from './navigationTypes';

export const initedNavigation = createEvent<Navigation>();

export const $navigation = restore(initedNavigation, null);

export const navigate = createEvent<ScreenItem>();

interface NavigateFxParams {
    screen: ScreenItem;
    navigation: Nullable<Navigation>;
}

export const resetNavigateFx = attach({
    source: $navigation,
    mapParams: (screen: ScreenItem, navigation) => ({ screen, navigation }),
    effect: createEffect(({ navigation, screen }: NavigateFxParams) => {
        navigation?.reset({
            index: 0,
            routes: [{ name: screen }],
        });
    }),
});

export const navigateFx = attach({
    source: $navigation,
    mapParams: (screen: ScreenItem, navigation) => ({ screen, navigation }),
    effect: createEffect(({ navigation, screen }: NavigateFxParams) => {
        navigation?.navigate(screen);
    }),
});
