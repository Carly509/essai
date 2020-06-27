/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View, Text, SafeAreaView, StyleSheet, TouchableOpacity,
} from 'react-native';

import Theme from '../Theme';
import { SCREEN_HEIGHT } from '../utils/dimensions';

const Step1 = (props) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'rgba(24, 152, 35, 0.99)', alignItems: 'center' }}>
      <View testID="logo" style={{ flexDirection: 'row', marginVertical: SCREEN_HEIGHT * 0.02 }}>
        <Text style={{ color: '#fff', fontSize: 40 }}>
          only
          <Text style={{ fontWeight: 'bold' }}>trust</Text>
        </Text>
        <Text style={styles.indice}>TM</Text>
      </View>
      <View style={{ width: '80%', marginTop: SCREEN_HEIGHT * 0.12 }}>
        <Text testID="instruction-one" style={[styles.text, { marginBottom: 15 }]}>How it works:</Text>
        <Text style={styles.text}>1. Sign Up for an OT account</Text>
        <Text testID="instruction-two" style={styles.text}>2. Connect your Bank Account</Text>
        <Text testID="instruction-three" style={styles.text}>
          3. Start purchasing available OnlyTrust LOC or third parties
        </Text>
        <Text testID="instruction-four" style={styles.text}>4. Send or sell</Text>
      </View>
      <TouchableOpacity
        style={styles.btnstarted}
        testID="signup-btn"
        onPress={() => props.navigation.navigate('Registration')}>
        <Text style={styles.start}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="signin-btn" style={styles.button} onPress={() => props.navigation.navigate('Login')}>
        <Text style={styles.login}>Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Step1;

const styles = StyleSheet.create({
  indice: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 30,
  },
  text: {
    color: 'white',
    ...Theme.typography.robotoFont.medium,
    fontSize: 16,
  },
  btnstarted: {
    width: '80%',
    height: '8%',
    borderRadius: 6,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  start: {
    color: '#199926',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#199926',
    borderRadius: 30,
    marginVertical: 10,
  },
  login: {
    fontSize: 16,
    color: '#fff',
  },
});
