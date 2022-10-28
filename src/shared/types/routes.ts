export type RootStackParamList = {
    Login: undefined;
    Tabs: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootStackParamList {
            Login: undefined;
            Tabs: undefined;
        }

        interface RootParamList extends RootStackParamList {}
    }
}
