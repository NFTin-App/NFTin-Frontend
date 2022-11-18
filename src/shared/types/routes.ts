import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
    CompositeNavigationProp,
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { StackNavigationProp } from '@react-navigation/stack';

interface StackParamList {
    ConnectWallet: undefined;
    ConnectLensProfile: undefined;
    SelectLensProfile: undefined;
    Loading: undefined;
    Start: undefined;
    Onboarding: undefined;
    Tabs: NavigatorScreenParams<TabParamList>;
}

interface TabParamList {
    Profile: undefined; // TODO переименовать в ViewerProfile
    ActivityFeed: undefined;
    Home: undefined;
    Search: undefined;
}

export type RootTabParamList = {
    [key in keyof TabParamList]: TabParamList[key];
};

export type RootStackParamList = {
    [key in keyof StackParamList]: StackParamList[key];
};

export type ProfileScreenNavigationProp = CompositeNavigationProp<
    StackNavigationProp<RootStackParamList>,
    BottomTabNavigationProp<RootTabParamList, 'Profile'>
>;

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Extract<T, string>
>;

export type HomeTabScreenProps<T extends keyof RootTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
>;
