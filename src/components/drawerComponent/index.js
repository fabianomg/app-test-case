import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import { Dh, Dw } from '../../common';

export default function DrawerComponent(props) {
    return (
        <View>
            <View style={styles.profile}>
                <Image
                    source={{ uri: 'https://www.drshaneholmes.com/wp-content/uploads/2020/03/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png' }}
                    style={styles.image}
                />

            </View>
            <View style={styles.details}>
                <Text style={styles.textDetails}>Nome: Fantasia</Text>
                <Text style={styles.textDetails}>Descrição: Detalhes</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <View style={styles.row}>
                    <Entypo name='home' style={styles.icon} />
                    <DrawerItem
                        label="Home"
                        onPress={() => props.navigation.navigate('Home')}
                        options={{ title: 'My home' }}
                    />
                </View>
                <View style={styles.row}>
                    <FontAwesome name='list-alt' style={styles.icon} />
                    <DrawerItem
                        label="Feed"
                        onPress={() => props.navigation.navigate('Feed')}
                    />
                </View>
                <View style={styles.row}>
                    <MaterialIcons name='person' style={styles.icon} />
                    <DrawerItem
                        label="Profile"
                        onPress={() => props.navigation.navigate('Profile')}
                    />
                </View>
                <View style={styles.row}>
                    <MaterialIcons name='settings' style={styles.icon} />
                    <DrawerItem
                        label="Settings"
                        onPress={() => props.navigation.navigate('Settings')}
                    />
                </View>
            </DrawerContentScrollView>
            <View style={styles.column}>
                <TouchableOpacity style={styles.btnLogout} onPress={() => props.navigation.navigate('Login')}>
                    <Text style={{ color: '#FFF' }}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    profile: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dh * 0.3,
        backgroundColor: '#EEE',
    },
    image: {
        width: Dh * 0.2,
        height: Dh * 0.2,
        borderRadius: Dh * 0.1,
    },
    details: {
        height: 60,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#6495ED',
    },
    textDetails: {
        color: "#FFF",
        fontWeight: '500',
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
    },
    icon: {
        fontSize: 24,
        color: '#AAA',
        marginLeft: 10,
    },
    btnLogout: {
        height: 50,
        width: 200,
        borderRadius: 7,
        backgroundColor: '#C55',
        alignItems: 'center',
        justifyContent: 'center',
    },
});