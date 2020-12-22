import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../pages/login';
import Splash from '../pages/splash';

const CredentialsTab = createStackNavigator();

export default function CredentiaslsTabNavigator() {

    return (
        <CredentialsTab.Navigator
            initialRouteName="Splash"
        >
            <CredentialsTab.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <CredentialsTab.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />
        </CredentialsTab.Navigator>
    );
}