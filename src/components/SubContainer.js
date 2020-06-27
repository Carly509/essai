import React from 'react';
import {View} from 'react-native';
import {SCREEN_WIDTH, SIDE_MARGINS} from '../utils/dimensions';

const SubContainer = props => (
  <View style={{...styles.subContainer, ...props.style}}>{props.children}</View>
);

export default SubContainer;

const styles = {
  subContainer: {
    flex: 1,
    width: SCREEN_WIDTH - SIDE_MARGINS,
    borderRadius: 6,
  },
};
