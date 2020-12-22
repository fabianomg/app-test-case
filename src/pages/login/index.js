import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Dw } from '../../common';

export default function Login({ navigation }) {
    return (
    <View style={styles.content}>
        <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => navigation.navigate('Content')}
        >
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnLogin: {
        backgroundColor: '#55C',
        width: 300,
        height: 50,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:24,
        color:'#FFF',
    }
});