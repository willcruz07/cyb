import AsyncStorage from '@react-native-async-storage/async-storage';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native';

const firebaseConfig = {
    apiKey: "AIzaSyBt27OHf1G9uYKT8fPJ_JuXjcBcwreXBPw",
    authDomain: "cyb-ed4a8.firebaseapp.com",
    projectId: "cyb-ed4a8",
    storageBucket: "cyb-ed4a8.appspot.com",
    messagingSenderId: "54112171361",
    appId: "1:54112171361:web:4d76cb0eb1b82e62694120",
    measurementId: "G-NT9S0KEQK6"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage),
    popupRedirectResolver: undefined,
});

export const dbFirestore = getFirestore(firebaseApp);
// export const analytics = getAnalytics(firebaseApp);
