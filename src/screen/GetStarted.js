import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';

import Graph from './svg/getStarted/Graph';
import Line from './svg/getStarted/Line';
import ArrowUp from './svg/getStarted/ArrowUp';
import { SCREEN_HEIGHT } from '../utils/dimensions';
import Theme from '../Theme';

class GetStarted extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <View
            testID="logo"
            style={{
              flexDirection: 'row',
            }}>
            <Text style={styles.title}>
              only
              <Text style={{ fontWeight: 'bold' }}>trust</Text>
            </Text>
            <Text style={styles.indice}>TM</Text>
          </View>
          <Text style={styles.btc}>00296149 OnlyTrust Bitcoin History</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ArrowUp />
            <Text style={styles.vector}>0.19% to $9,462.32</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.subBox}>
              <Text style={styles.rec1}>$9,045.90</Text>
              <Text style={styles.dateBox}>this year</Text>
            </View>
            <Line style={styles.lineStyle} />
            <View style={styles.subBox}>
              <Text style={styles.rec2}>$2,706.44</Text>
              <Text style={styles.dateBox}>this year</Text>
            </View>
          </View>
          <Text style={styles.all}>1H 1D 1W 1M 1Y ALL</Text>

          <Text style={styles.graph}>$12,647.99</Text>
          <Graph style={{ marginBottom: SCREEN_HEIGHT * 0.1 }} />
          <Text style={styles.dol}>$3,179.69</Text>

          <Text style={styles.btc}>00296149 OnlyTrust Bitcoin History</Text>
          <View style={{ flexDirection: 'row' }}>
            {/* <ArrowUp /> */}
            <Text style={styles.vector}>0.19% to $9,462.32</Text>
          </View>
          <View style={styles.box}>
            <View style={styles.subBox}>
              <Text style={styles.rec1}>$7,045.90</Text>
              <Text style={styles.dateBox}>this year</Text>
            </View>
            {/* <Line style={styles.lineStyle} /> */}
            <View style={styles.subBox}>
              <Text style={styles.rec2}>$1,706.44</Text>
              <Text style={styles.dateBox}>this year</Text>
            </View>
          </View>
          <Text style={[styles.all, { marginBottom: SCREEN_HEIGHT * 0.1 }]}>
            1H 1D 1W 1M 1Y ALL
          </Text>
          <TouchableOpacity
            testID="get-started-btn"
            style={styles.btnstarted}
            onPress={() => this.props.navigation.navigate('Step1')}>
            <Text style={styles.start}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity
            testID="sign-in-btn"
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.login}>Sign In</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(24, 152, 35, 0.99)',
  },
  title: {
    color: '#fff',
    fontSize: 40,
  },
  indice: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 30,
  },
  btc: {
    fontSize: 10,
    color: 'white',
  },
  vector: {
    fontSize: 10,
    color: '#fff',
    marginLeft: 10,
    marginTop: 5,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '75%',
    marginVertical: SCREEN_HEIGHT * 0.03,
  },
  subBox: {
    alignItems: 'center',
    paddingTop: 10,
  },
  dateBox: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: '#fff',
  },
  rec1: {
    ...Theme.typography.robotoFont.bold,
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
  },
  lineStyle: {
    paddingBottom: 10,
    lineHeight: 100,
  },
  rec2: {
    ...Theme.typography.robotoFont.bold,
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
  },
  all: {
    fontSize: 11,
    color: '#fff',
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
  graph: {
    position: 'absolute',
    fontSize: 11,
    color: '#fff',
    marginTop: '10%',
    left: 304,
    top: 240,
  },
  dol: {
    position: 'absolute',
    fontSize: 11,
    color: '#fff',
    right: 304,
    top: 335,
  },
  btnstarted: {
    width: 270,
    height: 45,
    borderRadius: 6,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  start: {
    color: '#199926',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#199926',
    borderRadius: 30,
    marginTop: 10,
    paddingBottom: 10,
  },
  login: {
    fontSize: 16,
    color: '#fff',
  },
});

export default GetStarted;
