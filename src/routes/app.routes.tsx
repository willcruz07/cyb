import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TAppRoutes } from '../models/routeList';
import Home from '../screens/app/home';
import Register from '../screens/app/register';
import History from '../screens/app/history';

const AppStack = createNativeStackNavigator<TAppRoutes>();

function App() {
    return (
        <AppStack.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
            }}
        >
            <AppStack.Screen name="home" component={Home} />
            <AppStack.Screen name="registerBet" component={Register} />
            <AppStack.Screen name="history" component={History} />
        </AppStack.Navigator>
    );
}

export default React.memo(App);
