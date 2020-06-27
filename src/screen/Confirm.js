import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import GoBack from '../components/GoBack';
import Theme from '../Theme';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/dimensions';

const Confirm = (props) => {
    const { title, amount } = props.navigation.state.params.data;
    const addCommas = (val) => val.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const fees = title === 'Sell'? 1.03 : title === 'Buy'? 3.60 : 2.00;
    const total = (+amount - fees).toFixed(2);
    
    return (
        <SafeAreaView style={styles.container}>
            <GoBack/>
            <ScrollView contentContainerStyle={title === 'Sell' ? { alignItems: 'center' } : styles.subContainer }>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {title === 'Accept'? 'Accept OnlyTrust Letter of Credit':
                        title +' '+addCommas(amount) + ' of OnlyTrust LOC'
                    }
                </Text>
                <Text style={styles.smallText}>
                    Letter of Credit balance backed by XXX Onlytrust Bitcoins
                </Text>
            </View>
            { title === 'Buy' &&
                <View style={styles.details}>
                    <Text style={styles.text}>Funding Source: OnlyTrust Balance</Text>
                    <Text style={styles.text}>Amount: 0.002712483</Text>
                    <Text style={styles.text}>Exchange Rate: $7,366.94</Text>
                    <Text style={styles.text}>Symbol: OTBTC</Text>
                    <Text style={styles.text}>Total Amount Puchase: ${addCommas(amount)}</Text>
                    <Text style={styles.text}>Fees > $3.60</Text>
                    <Text style={styles.text}>Total Coast: ${addCommas(total)}</Text>
                </View>
            }
            { title === 'Accept' &&
                <View style={styles.details}>
                    <Text style={styles.text}>Origination: Ted Barlow</Text>
                    <Text style={styles.text}>Amount: 0.002712483</Text>
                    <Text style={styles.text}>Exchange Rate: $7,366.94</Text>
                    <Text style={styles.text}>Symbol: OTBTC</Text>
                    <Text style={styles.text}>Amount: ${addCommas(amount)}</Text>
                    <Text style={styles.text}>Fees > $2.00</Text>
                    <Text style={styles.text}>Total Amount: ${addCommas(total)}</Text>
                </View>
            }
            { title === 'Sell' && 
            <>
                <View style={styles.details}>
                    <Text style={styles.text}>Destination: OnlyTrust</Text>
                    <Text style={styles.text}>Amount: 0.002712483</Text>
                    <Text style={styles.text}>Exchange Rate: $7,366.94</Text>
                    <Text style={styles.text}>Symbol: OTBTC</Text>
                    <Text style={styles.text}>Total Sale Amount: ${addCommas(amount)}</Text>
                    <Text style={styles.text}>Fees > $1.03</Text>
                    <Text style={styles.text}>Total Proceeds: ${addCommas(total)}</Text>
                </View>
                <View style={{  width: '58%', marginTop: SCREEN_HEIGHT * 0.07 }}>
                    <Text style={[styles.text, {textAlign: 'center', fontSize: 12}]}>
                        By confirming, I certify under penalties perjury that I’ve reviewed the information 
                        on this Form W-9 and that it is correct. The Internal Revenue Service does not require 
                        your consent to any provision of this document other than certifications require to avoid 
                        backup witholding.
                    </Text>
                </View>
            </>
            }
            <TouchableOpacity
                onPress={() => ''}
                style={title === 'Sell'? confirmBtnStyle : styles.confirmBtn}
            >
                <Text style={styles.confirm}>
                    Confirm
                </Text>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Confirm;

const confirmBtnStyle = {
    width: '80%',
    height: SCREEN_HEIGHT * 0.07,
    backgroundColor: Theme.colors.primary,
    borderRadius: 6,
    marginTop: SCREEN_HEIGHT * 0.04,
    marginBottom: SCREEN_HEIGHT * 0.03,
    justifyContent: 'center',
}

const styles = StyleSheet.create({
    container: {
        flex: SCREEN_HEIGHT,
        backgroundColor: 'white',
    },
    subContainer: {
        flex: 1,
        alignItems: 'center',
    },
    textContainer: {
        marginTop: SCREEN_HEIGHT * 0.07,
        marginBottom: SCREEN_HEIGHT * 0.09,
        alignItems: 'center',
    },
    title: {
        ...Theme.typography.robotoFont.bold,
        fontSize: 14,
        color: '#000000',
        marginBottom: '2%',
    },
    smallText: {
        ...Theme.typography.robotoFont.medium,
        fontSize: 9,
        color: 'rgba(139, 137, 137, 0.85)',
    },
    details: {
        width: '70%',
        alignSelf: 'auto',
        marginLeft: SCREEN_WIDTH * 0.12,
    },
    text: {
        ...Theme.typography.robotoFont.medium,
        fontSize: 14,
        color: 'rgba(139, 137, 137, 0.85)',
        marginBottom: SCREEN_HEIGHT * 0.02
    },
    confirmBtn: {
        ...confirmBtnStyle,
        marginTop: 'auto',
    },
    confirm: {
        ...Theme.typography.robotoFont.medium,
        fontSize: 12,
        textAlign: 'center',
        color: '#ffffff',
    }
})