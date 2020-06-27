import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { SCREEN_HEIGHT } from '../utils/dimensions';
import GoBack from '../components/GoBack';
import Theme from '../Theme';

export default class Help extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Theme.colors.background }}>
                <GoBack/>
                <Text style={styles.title}>How Can We Help You?</Text>
                <View style={styles.lines}/>
                <TouchableText value='Access Old Account'/>
                <View style={styles.lines}/>
                <TouchableText value='Temporarily Disable Account'/>
                <View style={styles.lines}/>
                <TouchableText value='Cancel my OnlyTrust Account'/>
                <View style={styles.lines}/>
                <TouchableText value='Something Else'/>
                <View style={styles.lines}/>
                <Image source={require('./images/only_trust.jpg')} style={styles.img} />
                <View style={{backgroundColor: '#E5E5E5', height: '5%' }}></View>
            </View>
        )
    }
}

const TouchableText = (props) => (
    <TouchableOpacity>
        <Text style={styles.text}>{props.value} </Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    title: {
        ...Theme.typography.robotoFont.bold,
        fontSize: 20,
        textAlign: 'center',
        color: '#000000',
        marginTop: SCREEN_HEIGHT * 0.05,
        marginBottom: SCREEN_HEIGHT * 0.1,
    },
    text: {
        ...Theme.typography.robotoFont.medium,
        fontSize: 17,
        color: '#000000',
        marginVertical: SCREEN_HEIGHT * 0.02,
        paddingLeft: 20,
    },
    lines: {
        borderBottomColor: 'rgba(139, 137, 137, 0.85)',
        borderBottomWidth: 1
    },
    img: {
        maxWidth: '100%',
        height: '15%',
        resizeMode: 'contain',
        marginTop: SCREEN_HEIGHT * 0.2,
        marginBottom: 'auto'
    }
})