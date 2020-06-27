import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, alert, SafeAreaView } from 'react-native';

const Preferences = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.greyLabel}>FULL NAME</Text>
    <Text style={styles.robotoFont}>ROBERT CARRICO</Text>
    <Text style={styles.greyLabel}>PERSONAL</Text>
    <View>
      <Text style={styles.robotoFont}>(512) 555-5555</Text>
      <View style={{ borderTopWidth: 1, borderTopColor: styles.greyLabel.backgroundColor }} />
      <Text style={styles.robotoFont}>ROBERT.CARRICO@GMAIL.COM</Text>
      <View style={{ borderTopWidth: 1, borderTopColor: styles.greyLabel.backgroundColor }} />
      <AddPhoneOrEmailButton />
    </View>
    <Text style={styles.greyLabel}>ADDRESS</Text>
    <Text style={{ ...styles.robotoFont, flexGrow: 1 }}>1 Sample Dr, Austin, TX 78741</Text>
    <View style={{ ...styles.greyLabel, height: 60 }} />
  </SafeAreaView>
);

const AddPhoneOrEmailButton = () => (
  <View>
    <TouchableOpacity onPress={() => alert('AddPhone')}>
      <Text style={{ ...styles.robotoFont, color: styles.greyLabel.color }}>
        Add Phone or Email
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  ellipse: {
    marginVertical: 20,
    marginLeft: 15,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
  },
  greyLabel: {
    fontFamily: 'Source Code Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'rgba(139, 137, 137, 0.85)',
    backgroundColor: '#E5E5E5',
    fontSize: 17,
    height: 45,
    // width: '100%',
    paddingLeft: 15,
    paddingTop: 10,
  },
  robotoFont: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    paddingLeft: 15,
    marginVertical: 15,
  },
});

export default Preferences;
