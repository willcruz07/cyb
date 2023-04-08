import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { AuthProvider } from './hooks/useAuth';

import Route from './routes';

LogBox.ignoreLogs(['Setting a timer']);

SplashScreen.preventAutoHideAsync();

export function Main() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Route />
            </NavigationContainer>
        </AuthProvider>
    );
}
