import * as React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  DrawerComponent from './src/components/drawerComponent';

import Feed from './src/pages/feed';
import Home from './src/pages/home';
import Profile from './src/pages/profile';
import Settings from './src/pages/settings';
import Header from './src/components/header';
import Navigation from './src/navigation';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Navigation />
  );
}