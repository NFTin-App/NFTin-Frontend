import { attach, createEffect, createEvent, createStore, sample } from 'effector';

import { Nullable } from '@shared/types';

import { NavigateParams, Navigation, RouteName } from './navigationTypes';

export const navigationInited = createEvent<Navigation>();

export const $navigation = createStore<Nullable<Navigation>>(null);

export const navigate = createEvent<RouteName>();

sample({
    clock: navigationInited,
    filter: (navigation) => navigation.isReady(),
    target: $navigation,
});

export const createNavigationFx = (callback: (navigation: Nullable<Navigation>) => void) =>
    attach({
        source: $navigation,
        effect: createEffect((navigation: Nullable<Navigation>) => {
            callback(navigation);
        }),
    });

export const createResetNavigateFx = <T extends RouteName>(
    ...[screen, params]: NavigateParams<T>
) => {
    return createNavigationFx((navigation) => {
        navigation?.reset({
            index: 0,
            routes: [{ name: screen, params }],
        });
    });
};
