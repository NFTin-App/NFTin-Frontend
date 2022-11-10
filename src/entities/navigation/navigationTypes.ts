import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { RootStackParamList } from '@shared/types';

export type Navigation = NavigationContainerRefWithCurrent<RootStackParamList>;

export type NavigateParams<RouteName extends keyof RootStackParamList> = RouteName extends unknown
    ? undefined extends RootStackParamList[RouteName]
        ? [screen: RouteName] | [screen: RouteName, params: RootStackParamList[RouteName]]
        : [screen: RouteName, params: RootStackParamList[RouteName]]
    : never;

export type RouteName = keyof RootStackParamList;
