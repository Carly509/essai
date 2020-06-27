import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/dimensions';
import Theme from '../Theme';

class LetterOfCredit extends Component {

    buttonClickded = () => {
        Alert.alert(
            "Accept Terms",
            "By continuing you agree to purchase LoC #: A27JX0 $105.00 fee",
            [
                { text: "Agree", onPress: () => console.log("Agree pressed") },
                {
                    text: "View Terms",
                    onPress: () => console.log("View Terms pressed"),

                },
                { text: "Dismiss", onPress: () => console.log("Dismiss pressed") }
            ],

        );
    };

    buttonCancelAlert = () => {
        Alert.alert('Cancel',
            'Are you sure you want to Cancel your process?',
            [{ text: 'Yes', onPress: () => console.log('Cancel Pressed') },
            { text: 'No' }])
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={{ marginHorizontal: SCREEN_WIDTH * 0.02}}>
                <Text style={styles.title}>Letter of Credit A1267k</Text>
                <Image source={require('../assets/PM.png')} style={styles.img} />
                <View style={styles.footContainer}>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.button} onPress={this.buttonClickded}>
                            <Text style={styles.textButton}>
                                Purchase Letter of Credit
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this.buttonCancelAlert} >
                            <Text style={styles.textButton}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rectangleTen}>
                    <Text style={styles.actionCenter}>Action Center</Text>
                    <Text style={styles.financialAccount}>
                        FINANCIAL ACCOUNTS {"\n"}{"\n"}
                        EDIT ONLYTRUST ACCOUNT{"\n"}{"\n"}
                        TERMS & CONDITIONS{"\n"}{"\n"}
                        PRIVACY POLICY
                    </Text>

                    </View>
                </View>
                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        ...Theme.typography.robotoFont.bold,
        fontSize: 20,
        textAlign: 'center',
        color: '#000000',
        marginVertical: SCREEN_HEIGHT * 0.05,
    },
    img: {
        maxWidth: '100%',
        height: SCREEN_HEIGHT * 0.7,
        resizeMode: 'contain',
    },
    buttonsContainer: {
        flexDirection: "row",
        marginVertical: 10,
    },
    footContainer: {
        alignItems: 'center',
    },
    button: {
        width: SCREEN_WIDTH * 0.4,
        height: 40,
        backgroundColor: '#189823',
        borderRadius: 6,
        marginHorizontal: 5,
    },
    textButton: {
        ...Theme.typography.robotoFont.medium,
        fontSize: 12,
        textAlign: 'center',
        color: '#FFFFFF',
        borderRadius: 6,
        marginTop: '7%',
    },
    rectangleTen: {
        width: '85%',
        height: 125,
        backgroundColor: 'rgba(24, 152, 35, 0.99)',
        borderRadius: 6,
        marginBottom: 15,
    },
    actionCenter: {
        ...Theme.typography.robotoFont.bold,
        width: 160,
        height: 29,
        marginLeft: 15,
        marginTop: 10,
        fontSize: 16,
        color: '#FFFFFF',
    },
    financialAccount: {
        width: 137,
        height: 78,
        marginLeft: 15,
        ...Theme.typography.robotoFont.bold,
        fontSize: 9,
        color: '#FFFFFF',
    },
});

export default LetterOfCredit;