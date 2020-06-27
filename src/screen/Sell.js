import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import RectangleThirtyTwo from './svg/sell/RectangleThirtyTwo';
import GoBack from '../components/GoBack';
import GrayBoxContainer from '../components/GrayBoxContainer';
import Theme from '../Theme';
import RouteNames from '../RouteNames';

class Sell extends React.Component {
  render() {
    const grayBoxesData = {
      row1: [
        { text: '$100', path: RouteNames.Confirm, data: { title: 'Sell', amount: '100' } },
        { text: '$500', path: RouteNames.Confirm, data: { title: 'Sell', amount: '500' } },
        { text: '$1000', path: RouteNames.Confirm, data: { title: 'Sell', amount: '1000' } },
      ],
      row2: [
        { text: '5,000', path: RouteNames.Confirm, data: { title: 'Sell', amount: '5000' } },
        { text: '10,000', path: RouteNames.Confirm, data: { title: 'Sell', amount: '10000' } },
        { text: '...', path: 'CustomLOC', data: { title: 'Sell' } },
      ],
    };
    return (
      <ScrollView style={{ backgroundColor: Theme.colors.background }} contentContainerStyle={{ alignItems: 'center' }}>
        <GoBack />
        <View style={styles.textContainer}>
          <Text style={styles.sellOnlyTrustLOC}>
            Sell OnlyTrust LOC
          </Text>
          <Text style={styles.$10}>
            $10,000
          </Text>
          <Text style={styles.letterOfCreditBalance}>
            Letter of Credit balance backed by Onlytrust Bitcoins
          </Text>
        </View>
        <View>
          <RectangleThirtyTwo style={styles.rectangle} />
        </View>
        <View style={{ marginTop: '10%' }}>
          <Text style={styles.hdwmy}> 1H   1D   1W   1M   1Y   ALL</Text>
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
    marginBottom: '10%',
  },
  $10: {
    ...Theme.typography.robotoFont.normal,
    fontWeight: '900',
    fontSize: 30,
    color: Theme.colors.primary,
  },
  letterOfCreditBalance: {
    ...Theme.typography.robotoFont.normal,
    fontWeight: '500',
    fontSize: 10,
    color: 'rgba(139, 137, 137, 0.85)',
  },
  hdwmy: {
    ...Theme.typography.robotoFont.bold,
    fontSize: 11,
    color: '#000000',
  },
});

export default Sell;
