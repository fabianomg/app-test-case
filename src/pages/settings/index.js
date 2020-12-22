import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header';

export default function Settings({ navigation }) {
    return (
        <View>
            <Header handleOpenDrawer={() => navigation.openDrawer()} title='Settings' />
            <Text>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});