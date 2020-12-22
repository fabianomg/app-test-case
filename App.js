import * as React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Feed from './src/pages/feed';
import Home from './src/pages/home';
import Profile from './src/pages/profile';
import Settings from './src/pages/settings';
import  DrawerComponent from './src/components/drawerComponent';
import Header from './src/components/header';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={DrawerComponent}
      >
        <Drawer.Screen name="Feed" component={Feed}  />
        <Drawer.Screen name="Home" component={Home}  />
        <Drawer.Screen name="Profile" component={Profile}  />
        <Drawer.Screen name="Settings" component={Settings}  />
        <Drawer.Screen name="Header" component={Header}  />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}