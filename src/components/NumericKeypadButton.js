import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import Theme from '../Theme';

const NumericKeypadButton = (props) => (
  <TouchableOpacity style={styles.btn} onPress={() => props.onPress(props.value)}>
    <Text style={styles.btnText}>{props.value}</Text>
  </TouchableOpacity>
);

export default NumericKeypadButton;

const styles = {
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

NumericKeypadButton.propTypes = {
  value: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
