import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header';

export default function Profile({ navigation }) {
    return (
        <View>
            <Header handleOpenDrawer={() => navigation.openDrawer()} title='Profile' />
            <Text>Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});