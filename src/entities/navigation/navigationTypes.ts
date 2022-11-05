import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { RootStackParamList } from '@shared/types';

export type Navigation = NavigationContainerRefWithCurrent<RootStackParamList>;

export type ScreenItem = keyof RootStackParamList;
