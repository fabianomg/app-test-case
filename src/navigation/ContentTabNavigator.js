import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerComponent from '../components/drawerComponent';

import Feed from '../pages/feed';
import Home from '../pages/home';
import Profile from '../pages/profile';
import Settings from '../pages/settings';
import Header from '../components/header';

const Drawer = createDrawerNavigator();

export default function ContentTabNavigator() {
    return (
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={DrawerComponent}
            >
                <Drawer.Screen name="Feed" component={Feed} />
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="Settings" component={Settings} />
                <Drawer.Screen name="Header" component={Header} />
            </Drawer.Navigator>
    );
}