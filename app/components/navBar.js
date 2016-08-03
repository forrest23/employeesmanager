'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Platform, StatusBar} from 'react-native';
const titleImg = require('../assets/title.png');

export default class NavBar extends Component {
    render() {

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#34b5da'/>
                <Image style={styles.image} source={titleImg}/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 0 : 0,
        flex: 1,
        right: 0,
        left: 0,
        backgroundColor: '#34b5da',
        justifyContent: 'center',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? 64 : 54,
    },
    image: {
        marginTop: Platform.OS === 'ios' ? 15 : 0,
        width: 110,
        resizeMode: Image.resizeMode.contain
    },
});
