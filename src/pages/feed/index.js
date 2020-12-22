import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header';

export default function Feed({ navigation }) {
    return (
        <View>
            <Header handleOpenDrawer={() => navigation.openDrawer()} title='Feed'/>
            <Text>Feed</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});