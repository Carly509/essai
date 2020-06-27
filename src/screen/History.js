import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import GoBack from '../components/GoBack';
import VectorOneComponent from './svg/buy/VectorOneComponent';

class History extends Component {

  FlatListHeader = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>History</Text>
      </View>
    )
  }
  render() {
    const DATA = [
      {
        id: '97887',
        subTitle: "OnlyTrust Letter of Credit",
        price: "$10,000",
        date: "Oct 25, 2019 at 11:58 PM",
      },
      {
        id: '9787',
        subTitle: "OnlyTrust Letter of Credit",
        price: "$10,000",
        date: "Oct 25, 2019 at 11:58 PM",
      },
      {
        id: '978',
        subTitle: "OnlyTrust Letter of Credit",
        price: "$10,000",
        date: "Oct 25, 2019 at 11:58 PM",
      },
      {
        id: '97617',
        subTitle: "OnlyTrust Letter of Credit",
        price: "$10,000",
        date: "Oct 25, 2019 at 11:58 PM",
      },
      {
        id: '97827',
        subTitle: "OnlyTrust Letter of Credit",
        price: "$10,000",
        date: "Oct 25, 2019 at 11:58 PM",
      },
      {
        id: '97687',
        subTitle: "OnlyTrust Letter of Credit",
        price: "$10,000",
        date: "Oct 25, 2019 at 11:58 PM",
      },
      {
        id: '95687',
        subTitle: "OnlyTrust Letter of Credit",
        price: "$5,000",
        date: "Oct 25, 2019 at 11:58 PM",
      },
      {
        id: '94287',
        subTitle: "OnlyTrust Letter of Credit",
        price: "$5,000",
        date: "Oct 25, 2019 at 11:58 PM",
      },

    ];

    return (
      <View style={styles.container}>
        <GoBack />
        <FlatList
          data={DATA}
          ListHeaderComponent={this.FlatListHeader}
          renderItem={({ item }) => (
            <BoxHistory subTitle={item.subTitle} price={item.price} date={item.date} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const BoxHistory = props => (
  <View style={styles.BoxContainer}>
    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
      <Text style={styles.subTitle}>{props.subTitle}</Text>
      <Text style={styles.date} >{props.date}</Text>
    </View>

    <View style={{ flexDirection: 'row', marginRight: 10 }}>
      <Text style={styles.price}>{props.price}</Text>
      <VectorOneComponent style={styles.vector} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: '10%',
  },
  mainTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
    color: '#000000',
  },
  BoxContainer: {
    height: 90,
    backgroundColor: 'rgba(196,196,196,0.25)',
    borderRadius: 6,
    marginBottom: 10,
    marginHorizontal: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  date: {
    // fontFamily: 'PT Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 13,
    color: 'rgba(139, 137, 137, 0.85)',
  },
  price: {
    // fontFamily: 'PTSans-Bold',
    fontSize: 14,
    lineHeight: 18,
    marginRight: 5,
    color: '#000000',
  },
});

export default History;
