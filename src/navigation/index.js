import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import CredentialsTabNavigator from './CredentialsTabNavigator';
import ContentTabNavigator from './ContentTabNavigator';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Credentials" component={CredentialsTabNavigator} />
      <Stack.Screen name="Content" component={ContentTabNavigator} />
    </Stack.Navigator>
  );
}
