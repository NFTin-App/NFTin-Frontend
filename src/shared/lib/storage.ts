import AsyncStorage from '@react-native-async-storage/async-storage';

export type Storage = {
    getValue: () => Promise<string | null>;
    setValue: (value: string | undefined) => Promise<void>;
};

export type StorageFactory = (key: string) => Storage;

const makeAsyncStorage: StorageFactory = (key) => ({
    getValue: async () => await AsyncStorage.getItem(key),
    setValue: async (value: string | undefined) => {
        if (value) {
            return await AsyncStorage.setItem(key, value);
        } else {
            return await AsyncStorage.removeItem(key);
        }
    },
});

export const storage = {
    make: makeAsyncStorage,
};
