import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const TouchableText = ({ onPress, style, value }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.footerBoxText, style]}>{value} </Text>
  </TouchableOpacity>
);

TouchableText.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.func,
  value: PropTypes.string,
};

TouchableText.defaultProps = {
  style: styles,
  value: null,
  onPress: () => null,
};

const styles = StyleSheet.create({
  footerBox: {
    flex: 1,
    backgroundColor: 'rgba(24, 152, 35, 0.99)',
    borderRadius: 6,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 15,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  footerBoxText: {
    color: 'white',
    fontSize: 9,
    fontFamily: 'Roboto-Bold',
  },
});

export default TouchableText;
