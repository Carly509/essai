/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, Platform } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useFocusEffect } from '@react-navigation/native';

import SubContainer from '../components/SubContainer';
import GrayBoxContainer from '../components/GrayBoxContainer';
import { logoutAction } from '../redux/actions/AuthActions';
// import TouchableText from '../components/TouchableText';

const Dashboard = ({ navigation, logout }) => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setHidden(false);
      StatusBar.setBarStyle(Platform.OS === 'android' ? 'light-content' : 'dark-content');

      navigation.setOptions({
        headerShown: false,
      });
    }, [navigation])
  );

  // TODO: Properly link to the other screens
  // const grayBoxesData = {
  //   row1: [
  //     { text: 'Buy', onPress: () => navigation.navigate('Buy') },
  //     { text: 'Sell', onPress: () => navigation.navigate('Sell') },
  //     { text: 'Send', onPress: () => navigation.navigate('Send') },
  //   ],

  //   row2: [
  //     { text: 'Receive', onPress: () => navigation.navigate('Receive') },
  //     { text: 'History', onPress: () => navigation.navigate('History') },
  //     { text: 'Help', onPress: () => navigation.navigate('Help') },
  //   ],

  //   row3: [{ text: 'Logout', onPress: () => logout() }],
  // };

  const grayBoxesData = {
    row1: [
      { text: 'Buy', onPress: () => alert('Coming Soon') },
      { text: 'Sell', onPress: () => alert('Coming Soon') },
      { text: 'Send', onPress: () => alert('Coming Soon') },
    ],

    row2: [
      { text: 'Receive', onPress: () => alert('Coming Soon') },
      { text: 'History', onPress: () => alert('Coming Soon') },
      { text: 'Help', onPress: () => alert('Coming Soon') },
    ],

    row3: [{ text: 'Logout', onPress: () => logout() }],
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={{ paddingBottom: 200 }}>
      <View style={styles.container}>
        {/* <Ellipse style={styles.ellipse} /> */}
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.$}>$10,000</Text>
          </View>
          <View>
            <Text style={styles.xxxBitcoins}>
              Letter of Credit balance backed by XXX Onlytrust Bitcoins
            </Text>
          </View>
          <View style={styles.btcContainer}>
            <View>
              <Text style={styles.btc}>0.00296149 BTC</Text>
            </View>
            <View style={styles.to$Container}>
              <View>{/* <VectorComponent /> */}</View>
              <Text style={styles.to$}>0.19% to $9,462.32</Text>
            </View>
          </View>
        </View>
        <SubContainer style={styles.greenBox}>
          <View>
            <Text style={styles.greenBoxPrice}>$10K</Text>
            <View>
              <Text style={styles.greenBoxCaption}>LoC Purchased</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View>
            <Text style={styles.greenBoxPrice}>$25K</Text>
            <View>
              <Text style={styles.greenBoxCaption}>LoC Value Sold</Text>
            </View>
          </View>
        </SubContainer>
        <GrayBoxContainer grayBoxesData={grayBoxesData} />
        {/* <SubContainer style={{ ...styles.footerBox }}>
          <View>
            <Text style={styles.footerBoxTitle}>Action Center</Text>
          </View>
          <View>
            <TouchableText
              value="PERSONAL"
              onPress={() => navigation.navigate(RouteNames.Preferences)}
            />
            <TouchableText value="SECURITY" />
            <TouchableText
              value="NOTIFICATIONS"
              onPress={() => navigation.navigate(RouteNames.Notifications)}
            />
            <TouchableText value="PRIVACY POLICY" />
            <TouchableText
              value="SIGN OUT"
              onPress={() => logout()}
            />
          </View>
        </SubContainer> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  greenBox: {
    backgroundColor: 'rgba(24, 152, 35, 0.99)',
    height: 109,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  greenBoxPrice: {
    fontFamily: 'Roboto-Bold',
    fontSize: 36,
    color: 'white',
  },
  greenBoxCaption: {
    fontFamily: 'Source Code Pro',
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  ellipse: {
    position: 'absolute',
    top: 25,
    left: 18,
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#f0f0f0',
  },
  $: {
    // top: 2,
    fontFamily: 'Roboto-Bold',
    fontSize: 32,
    textAlign: 'center',
    color: '#189823',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    color: 'rgba(139, 137, 137, 0.85)',
    marginTop: 96,
    marginBottom: 62,
  },
  xxxBitcoins: {
    fontFamily: 'Roboto-Medium',
    fontSize: 9,
    lineHeight: 11,
    // display: flex;
    textAlign: 'center',
    color: 'rgba(139, 137, 137, 0.85)',
  },
  btcContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btc: {
    fontFamily: 'Roboto-Medium',
    fontSize: 10,
    marginTop: 6,
    color: 'rgba(139, 137, 137, 0.85)',
  },
  to$Container: {
    width: 120,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  to$: {
    fontFamily: 'Roboto-Medium',
    fontSize: 10,
    marginTop: 5,
    color: 'rgba(139, 137, 137, 0.85)',
  },
  line: {
    width: 1,
    height: 73.49,
    backgroundColor: 'white',
  },
  buy: {
    width: 36,
    height: 25,
    left: 30,
    top: 35,
    fontFamily: 'Source Code Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 25,
    color: '#000000',
    textAlign: 'center',
  },
  sell: {
    width: 48,
    height: 25,
    left: 30,
    top: 35,
    fontFamily: 'Source Code Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 25,
    color: '#000000',
    textAlign: 'center',
  },
  send: {
    width: 48,
    height: 25,
    left: 18,
    top: 35,
    fontFamily: 'Source Code Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 25,
    color: '#000000',
    textAlign: 'center',
  },
  receive: {
    width: 84,
    height: 25,
    left: 6,
    top: 35,
    fontFamily: 'Source Code Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 25,
    color: '#000000',
  },
  history: {
    width: 84,
    height: 25,
    left: 10,
    top: 38,
    fontFamily: 'Source Code Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 25,
    color: '#000000',
  },
  help: {
    width: 84,
    height: 25,
    left: 25,
    top: 38,
    fontFamily: 'Source Code Pro',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 25,
    color: '#000000',
  },
  footerBoxTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
    color: '#FFFFFF',
  },
  financialAccount: {
    // position: 'absolute',
    width: 137,
    height: 80,
    left: 20,
    top: 20,
    fontFamily: 'Roboto-Bold',
    fontSize: 9,
    lineHeight: 11,
    alignItems: 'center',
    color: '#FFFFFF',
  },
});

Dashboard.propTypes = {
  navigation: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  logout: logoutAction,
};

export default connect(null, mapDispatchToProps)(Dashboard);
