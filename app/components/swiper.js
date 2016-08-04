/**
 * Created by fgmh on 16/8/2.
 * 图片轮播组件
 */
'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper'
import Swiper1 from '../assets/swiper1.png';

var styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d0d0d0',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d0d0d0',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d0d0d0',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    resizeMode: {
        resizeMode: Image.resizeMode.contain,
    },
})

export default class Calendar extends Component {
    render() {
        var width = Dimensions.get('window').width;
        return (
            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} showsPagination={false} height={139}>
                <View style={styles.slide1}>
                    <Image source={Swiper1}  style={[styles.resizeMode,{ width: width }]}/>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        )
    }
}
