import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import * as Updates from 'expo-updates';
import * as SplashScreen from 'expo-splash-screen';

import { StatusBar } from 'expo-status-bar';
import App from './app.routes';
import Auth from './auth.routes';

import { useLoadFonts } from '../hooks/useFonts';
import { useAuth } from '../hooks/useAuth';
import { Colors } from '../styles/Colors';

function Routes() {
    const [isReady, setIsReady] = useState<boolean>(false);
    const [splashScreenIsShowing, setSplashScreenIsShowing] = useState<boolean>(true);

    const { isLogged, authIsReady } = useAuth();

    const loadFonts = useCallback(async () => {
        await useLoadFonts();
    }, []);

    const checkUpdates = useCallback(async () => {
        if (!__DEV__) {
            const { isAvailable } = await Updates.checkForUpdateAsync();
            if (isAvailable) {
                await Updates.fetchUpdateAsync();
                await Updates.reloadAsync();
            }
        }
    }, []);

    useEffect(() => {
        (async () => {
            try {
                await loadFonts();
                await checkUpdates();
            } catch (error) {
                // setMessage(error.message);
                // setTimeout(() => {
                //     setShowMessage(true);
                // }, 500);
            } finally {
                setIsReady(true);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (isReady && authIsReady && splashScreenIsShowing) {
                await SplashScreen.hideAsync();
                setSplashScreenIsShowing(false);
            }
        })();
    }, [isReady, authIsReady]);

    if (!isReady) {
        return null;
    }

    return (
        <>
            <StatusBar style="light" backgroundColor={Colors.black} />
            <View style={styles.safeArea}>
                { isLogged ? <App /> : <Auth /> }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: Colors.black,
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
});

export default React.memo(Routes);
