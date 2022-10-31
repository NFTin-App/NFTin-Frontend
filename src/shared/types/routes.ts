import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

interface StackParamList {
    ConnectWallet: undefined;
    ConnectLensProfile: undefined;
    SelectLensProfile: undefined;
    Loading: undefined;
    Profile: undefined; // TODO переименовать в ViewerProfile
}

export type RootStackParamList = Record<keyof StackParamList, StackParamList[keyof StackParamList]>;

export type Navigation<T extends keyof RootStackParamList> = NativeStackNavigationProp<
    RootStackParamList,
    Extract<T, string>,
    undefined
>;

export type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Extract<T, string>
>;
