import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TAuthRoutes } from '../models/routeList';
import SignIn from '../screens/auth/signIn';
import SignUp from '../screens/auth/signUp';

const AppStack = createNativeStackNavigator<TAuthRoutes>();

function Auth() {
    return (
        <AppStack.Navigator
            initialRouteName="signIn"
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
            }}
        >
            <AppStack.Screen name="signIn" component={SignIn} />
            <AppStack.Screen name="signUp" component={SignUp} />
        </AppStack.Navigator>
    );
}

export default React.memo(Auth);
