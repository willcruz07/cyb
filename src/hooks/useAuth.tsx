import { onAuthStateChanged, User } from 'firebase/auth/react-native';
import React, { createContext, useCallback, useState, useMemo, useContext, useEffect } from 'react';
import { auth } from '../firebase/config';

interface IAuthProvider {
  isLogged: boolean;
  authIsReady: boolean;
  signIn(): void;
  signOut(): void;
}

const ContextAuthProvider = createContext<IAuthProvider>({} as IAuthProvider);

export function AuthProvider({ children }) {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [authIsReady, setAuthIsReady] = useState<boolean>(false);

    const checkOnAuthStateUser = (user: User) => {
        if (user) {
            console.log(user);
        } else {
            setIsLogged(true);
            setAuthIsReady(true);
        }
    };

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, checkOnAuthStateUser);

        return subscribe;
    }, []);

    const handleSignIn = useCallback(() => {
        console.log('SIGN IN');
    }, []);

    const handleSignOut = useCallback(() => {
        console.log('SIGN IN');
    }, []);

    const values = useMemo((): IAuthProvider => ({
        isLogged,
        authIsReady,
        signIn: handleSignIn,
        signOut: handleSignOut,
    }), [
        isLogged,
        authIsReady,
        handleSignIn,
        handleSignOut,
    ]);

    return (
        <ContextAuthProvider.Provider value={values}>
            {children}
        </ContextAuthProvider.Provider>
    );
}

export function useAuth() {
    const context = useContext(ContextAuthProvider);
    return context;
}
