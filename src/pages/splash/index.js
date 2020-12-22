import React, { useEffect } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default function Splash({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            redirectToLogin();
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    function redirectToLogin(){
        navigation.navigate('Login');
    }

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
    },
});