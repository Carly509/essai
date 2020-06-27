import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import NavigationService from '../services/NavigationService';
import {SCREEN_WIDTH} from '../utils/dimensions';

const GoBack = props => (
  <View style={styles.goBackContainer}>
    <TouchableOpacity
      style={{ zIndex: 100, }}
      onPress={() => NavigationService.goBack()
    }>
      <Text style={styles.goBack}>Go Back</Text>
    </TouchableOpacity>
  </View>
);

export default GoBack;

const styles = {
  goBackContainer: {
    position: 'absolute',
    top: 0,
    left: SCREEN_WIDTH - 108,
    width: 128,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBack: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
    textAlign: 'center',
    alignItems: 'center',
    color: '#0D7117',
    borderRadius: 6,
  },
};
