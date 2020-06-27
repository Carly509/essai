import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { SCREEN_HEIGHT } from '../utils/dimensions';
import Theme from '../Theme';
import TouchableText from '../components/TouchableText';

const Notifications = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.colors.background }}>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.greyLabel}>Preferences</Text>
      <TouchableText text="Push Notifications" check />
      <View style={styles.lines} />
      <TouchableText text="(512) 555-5555" check={false} />
      <View style={styles.lines} />
      <TouchableText text="ROBERT.CARRICO@GMAIL.COM" check />
      <View style={styles.lines} />
      <TouchableText text="OnlyTrust Notifications" check />
      <View style={[styles.lines, { marginBottom: 'auto' }]} />
      <View style={{ backgroundColor: '#E5E5E5', height: '5%' }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    ...Theme.typography.robotoFont.bold,
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
    marginTop: SCREEN_HEIGHT * 0.05,
    marginBottom: SCREEN_HEIGHT * 0.1,
  },
  greyLabel: {
    ...Theme.typography.robotoFont.bold,
    color: 'rgba(139, 137, 137, 0.85)',
    backgroundColor: '#E5E5E5',
    fontSize: 17,
    height: 45,
    paddingLeft: 15,
    paddingTop: 10,
  },
  text: {
    ...Theme.typography.robotoFont.medium,
    fontSize: 17,
    color: '#000000',
    paddingLeft: 15,
  },
  lines: {
    borderBottomColor: 'rgba(139, 137, 137, 0.85)',
    borderBottomWidth: 1,
  },
  vector: {
    marginRight: 15,
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SCREEN_HEIGHT * 0.02,
  },
});

export default Notifications;
