import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import RectangleThirtyTwo from './svg/buy/RectangleThirtyTwo';
import GoBack from '../components/GoBack';
import GrayBoxContainer from '../components/GrayBoxContainer';
import Theme from '../Theme';
import RouteNames from '../RouteNames';

class Buy extends React.Component {
  render() {
    const grayBoxesData = {
      row1: [
        { text: '$100', path: RouteNames.Confirm, data: { title: 'Buy', amount: '100' } },
        { text: '$500', path: RouteNames.Confirm, data: { title: 'Buy', amount: '500' } },
        { text: '$1000', path: RouteNames.Confirm, data: { title: 'Buy', amount: '1000' } },
      ],
      row2: [
        { text: '5,000', path: RouteNames.Confirm, data: { title: 'Buy', amount: '5000' } },
        { text: '10,000', path: RouteNames.Confirm, data: { title: 'Buy', amount: '10000' } },
        { text: '...', path: RouteNames.CustomLOC, data: { title: 'Buy' } },
      ],
    };
    return (
      <ScrollView style={{ backgroundColor: Theme.colors.background }} contentContainerStyle={{ alignItems: 'center' }}>
        <GoBack />
        <View style={styles.textContainer}>
          <Text style={styles.sellOnlyTrustLOC}>Buy</Text>
          <Text style={styles.onlyTrustThirdParty}>Only Trust | 3rd Party</Text>
          <Text style={styles.$10}>$10,000</Text>
          <Text style={styles.letterOfCreditBalance}>
            Letter of Credit balance backed by Onlytrust Bitcoins
          </Text>
        </View>
        <View>
          <Text style={styles.$12}> $12,647.99</Text>
          <RectangleThirtyTwo style={styles.rectangle} />
          <Text style={styles.$3}>$3,179.69</Text>
        </View>
        <View style={{ marginTop: '10%' }}>
          <Text style={styles.hdwmy}> 1H 1D 1W 1M 1Y ALL</Text>
        </View>
        <GrayBoxContainer
          grayBoxTextStyle={{ fontSize: 16, fontFamily: 'Roboto' }}
          grayBoxesData={grayBoxesData}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    marginVertical: '10%',
    alignItems: 'center',
  },
  sellOnlyTrustLOC: {
    ...Theme.typography.robotoFont.bold,
    fontSize: 16,
    color: '#000000',
    marginBottom: '2%',
  },
  onlyTrustThirdParty: {
    ...Theme.typography.robotoFont.bold,
    fontSize: 11,
    color: Theme.colors.primary,
    marginBottom: '2%',
  },
  $10: {
    ...Theme.typography.robotoFont.bold,
    fontSize: 30,
    color: Theme.colors.primary,
  },
  letterOfCreditBalance: {
    ...Theme.typography.robotoFont.normal,
    fontWeight: '500',
    fontSize: 10,
    color: 'rgba(139, 137, 137, 0.85)',
  },
  $12: {
    position: 'absolute',
    width: 85,
    height: 16,
    right: 20,
    top: 43,
    zIndex: 100,
    ...Theme.typography.robotoFont.normal,
    fontSize: 11,
    textAlign: 'center',
    alignItems: 'center',
    color: 'rgba(24, 152, 35, 0.99)',
  },
  $3: {
    position: 'absolute',
    width: 85,
    height: 16,
    right: 0,
    left: 23,
    top: 105,
    ...Theme.typography.robotoFont.normal,
    fontSize: 11,
    textAlign: 'center',
    alignItems: 'center',
    color: 'rgba(24, 152, 35, 0.99)',
  },
  hdwmy: {
    ...Theme.typography.robotoFont.bold,
    fontSize: 11,
    color: '#000000',
  },
});

export default Buy;
