/* eslint-disable no-undef */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

// import NavigationService from '../services/NavigationService';

const GrayBox = (props) => (
  <TouchableOpacity style={grayBoxStyle.grayBox} onPress={props.onPress}>
    <Text style={{ ...grayBoxStyle.grayBoxText, ...props.textStyle }}>{props.children}</Text>
  </TouchableOpacity>
);

GrayBox.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  textStyle: PropTypes.object,
};

GrayBox.defaultProps = {
  onPress: () => null,
  textStyle: {},
};

const grayBoxStyle = {
  grayBox: {
    width: '29%',
    height: '45.5%',
    borderRadius: 6,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },

  grayBoxText: {
    fontFamily: 'Source Code Pro',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
};

export default GrayBox;
