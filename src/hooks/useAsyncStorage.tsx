import { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IAsyncLocalStorage {
    loadingStorage: boolean;
    storageValue: string | null;
    setStorage: (value: string) => void;
    getStorage(): void;
    clearStorage(): void;
}

interface IAsyncLocalStorageProps {
    key: string;
    initialValue: string | null;
}

export const useAsyncStorage = ({ key, initialValue }: IAsyncLocalStorageProps): IAsyncLocalStorage => {
    const [loadingStorage, setLoadingStorage] = useState(false);
    const [storageValue, setStorageValue] = useState(initialValue);

    const setStorage = useCallback((value: string) => {
        setLoadingStorage(true);
        AsyncStorage.setItem(key, value)
            .finally(() => setLoadingStorage(false));
    }, [key]);

    const getStorage = useCallback(() => {
        setLoadingStorage(true);
        AsyncStorage.getItem(key)
            .then((value) => setStorageValue(value))
            .finally(() => setLoadingStorage(false));
    }, [key]);

    const clearStorage = useCallback(() => {
        setLoadingStorage(true);
        AsyncStorage.removeItem(key)
            .finally(() => setLoadingStorage(false));
    }, [key]);

    return {
        loadingStorage,
        setStorage,
        getStorage,
        clearStorage,
        storageValue,
    };
};
