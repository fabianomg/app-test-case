import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Dh, Dw } from '../../common';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header(props) {
    return (
        <View style={styles.content}>
            <View style={styles.left}>
                <TouchableOpacity onPress={() => props.handleOpenDrawer()}>
                    <MaterialIcons name='menu' style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.center}><Text style={styles.title}>{props.title}</Text></View>
            <View style={styles.right}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        height: 60,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
    },
    left: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 12,
        width: Dw * 0.1,
        backgroundColor: '#FFF',
    },
    center: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        width: Dw * 0.6,
        backgroundColor: '#FFF',
    },
    right: {
        height: 60,
        width: Dw * 0.2,
        backgroundColor: '#FFF',
    },
    icon: {
        fontSize: 30,
    },
    title: {
        fontSize: 22,
        color: '#000',
    },
});