import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Theme from '../Theme';

class NumericKeypad extends React.PureComponent {
  state = {
    dial: '0'
  }

  changeDial(val) {
    const { returnDialValue } = this.props;

    this.setState({
      dial: val
    }, () => returnDialValue(val))
  }

  onKeyPress = (key) => {
    let { dial } = this.state;
    const periodIndex = dial.indexOf('.');
    const dialLength = dial.length;

    // skip the second period
    if (key === '.' && dial.includes(key)) return

    if (key instanceof Object) {
      this.removeLastKey(dial);
      return
    }

    // limit dial to 2 decimals
    if (periodIndex > 0 && dialLength - periodIndex === 3) {
      return
    }
    // limit dial to 7 digits
    if (dial.length == 7 && !dial.includes('.') && key !== '.') return

    if (dial !== '0') {
      this.changeDial(dial + key);
    } else if (!+dial && key === '.') {
      this.changeDial('0.');
    } else {
      this.changeDial(key);
    }
  }

  addCommas(val) {
    return val.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  removeLastKey(dial) {
    const dialLength = dial.length;
    if (dialLength === 1 && dial === '0') return;
    // remove last char and if there is one char => dial = 0
    dial = dial.slice(0, dialLength - 1) || '0';

    this.changeDial(dial);
  }

  render() {
    const { dial } = this.state;
    const { containerStyle, dialStyle, groupBtnStyle } = this.props;
    const showKeys = KEYPAD_KEYS.map(
      (key, index) => (<Button key={index} value={key} onPress={this.onKeyPress} />)
    )
    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.dial, dialStyle]}>${this.addCommas(dial)}</Text>
        <View style={[styles.groupBtns, groupBtnStyle]}>
          {showKeys}
        </View>
      </View>
    )
  }
}

export default NumericKeypad;

const KEYPAD_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', <FontAwesome5 name="angle-left" color="black" size={15} />];

const Button = props => (
  <TouchableOpacity
    style={styles.btn}
    onPress={() => props.onPress(props.value)}
  >
    <Text style={styles.btnText}>{props.value}</Text>
  </TouchableOpacity>
)

const styles = {
  container: {
    height: '50%',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dial: {
    ...Theme.typography.robotoFont.medium,
    fontSize: 45,
    color: Theme.colors.primary,
  },
  groupBtns: {
    height: '55%',
    width: '65%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btn: {
    width: '33.33%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    ...Theme.typography.robotoFont.bold,
  },
};