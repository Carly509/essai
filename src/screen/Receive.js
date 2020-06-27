import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';
import GoBack from '../components/GoBack';
import { SCREEN_HEIGHT } from '../utils/dimensions';
import Theme from '../Theme';
import RouteNames from '../RouteNames';
import { addCommas } from '../utils/helper';

export default class Receive extends Component {
  handlePress(amount) {
    this.props.navigation.navigate(RouteNames.Confirm, { data: { title: 'Accept', amount } });
  }

  render() {
    const amount = '5000';
    return (
      <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center' }}>
        <GoBack />
        <Text style={styles.title}>Pending</Text>
        <View style={styles.rec1}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.text}>Available LoC Balance:</Text>
            <Text style={styles.text}>   $10,000 </Text>
          </View>
          <Text style={styles.financial}>Letter of Credit balance backed by XXX Onlytrust Bitcoins</Text>
        </View>
        <View style={styles.rec2}>
          <Text style={styles.letter}>OnlyTrust Letter of Credit</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
            <Text style={styles.sent}>Oct 25, 2019 at 11:58 PM sent by Ted Barlow</Text>
            <Text style={styles.rec2Price}>
              $
              {addCommas(amount)}
            </Text>
          </View>

          <View style={styles.btn}>
            <TouchableOpacity onPress={() => this.handlePress(amount)}>
              <Text style={styles.textBtn}>Accept</Text>
            </TouchableOpacity>
            <Text style={{ lineHeight: 15 }}>|</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
              <Text style={styles.textBtn}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    ...Theme.typography.robotoFont.medium,
    fontSize: 20,
    marginVertical: SCREEN_HEIGHT * 0.05,
    color: '#000000',
  },
  rec1: {
    width: '95%',
    height: 88,
    backgroundColor: 'rgba(24, 152, 35, 0.99)',
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: '4%',
  },
  text: {
    ...Theme.typography.robotoFont.medium,
    fontSize: 17,
    paddingBottom: 10,
    color: '#fff',
  },
  financial: {
    ...Theme.typography.robotoFont.medium,
    width: '70%',
    fontSize: 9,
    color: 'rgba(255, 255, 255, 0.85)',
  },
  rec2: {
    width: '95%',
    height: 103,
    marginTop: 10,
    backgroundColor: 'rgba(196,196,196,0.25)',
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: '4%',
  },
  letter: {
    ...Theme.typography.robotoFont.bold,
    fontSize: 12,
    color: '#000000',
  },
  sent: {
    // fontFamily: 'PT Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 20,
    fontSize: 10,
    color: 'rgba(139, 137, 137, 0.85)',
  },
  rec2Price: {
    // fontFamily: 'PT Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  btn: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: 80,
    justifyContent: 'space-between',
  },
  textBtn: {
    ...Theme.typography.robotoFont.normal,
    fontSize: 11,
    color: '#000',
  },
});
