import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import GoBack from '../components/GoBack';
import { SCREEN_HEIGHT } from '../utils/dimensions';
import Theme from '../Theme';
import NumericKeypad from '../components/NumericKeypad';
import RouteNames from '../RouteNames';

class CustomLOC extends React.Component {
  state = {
    amount: '0',
  }

  getAmount = (val) => {
    this.setState({
      amount: val
    })
  }

  handlePress(title) {
    const { amount } = this.state;
    if(amount === '0') return;
    this.props.navigation.navigate(RouteNames.Confirm,{data: {title,amount}})
  }

  render() {
    const { title } = this.props.navigation.state.params.data;

    return (
      <SafeAreaView style={styles.container}>
        <GoBack/>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title} OnlyTrust LOC</Text>
          <Text style={[styles.smallText,{marginBottom: '2%'}]}>Up to $10,000
          </Text>
          <Text style={styles.smallText}>
            Letter of Credit balance backed by XXX Onlytrust Bitcoins
          </Text>
        </View>        

        <NumericKeypad returnDialValue={this.getAmount}/>

        <TouchableOpacity
          onPress={() => this.handlePress(title)}
          style={styles.nextBtn}
        >
          <Text style={styles.next}>
            Next
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: '10%',
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
  nextBtn: {
    width: '80%',
    height: '7%',
    backgroundColor: Theme.colors.primary,
    borderRadius: 6,
    marginTop: 'auto',
    marginBottom: SCREEN_HEIGHT * 0.02,
    justifyContent: 'center',
  },
  next: {
    ...Theme.typography.robotoFont.medium,
    fontSize: 12,
    textAlign: 'center',
    color: '#ffffff',
  }

})
export default CustomLOC;