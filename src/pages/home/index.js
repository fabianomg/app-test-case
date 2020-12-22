import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/header';

export default function Home({ navigation }) {
    const handleOpenDrawer = () => navigation.openDrawer();

    return (
        <View>
            <Header handleOpenDrawer={handleOpenDrawer} title='Home'/>
            <Text> Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});