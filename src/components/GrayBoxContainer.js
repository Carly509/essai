import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import GrayBox from './GrayBox';
import { SCREEN_HEIGHT } from '../utils/dimensions';

const GrayBoxContainer = (props) => (
  <View style={styles.grayBoxesContainer}>
    {props.grayBoxesData?.row1?.map((grayBox, index) => (
      <GrayBox
        textStyle={props.grayBoxTextStyle}
        onPress={grayBox.onPress}
        data={grayBox.data}
        key={`${index + 1}-row1`}>
        {grayBox.text}
      </GrayBox>
    ))}

    {props.grayBoxesData?.row2?.map((grayBox, index) => (
      <GrayBox
        textStyle={props.grayBoxTextStyle}
        onPress={grayBox.onPress}
        data={grayBox.data}
        key={`${index + 1}-row2`}>
        {grayBox.text}
      </GrayBox>
    ))}

    {props.grayBoxesData?.row3?.map((grayBox, index) => (
      <GrayBox
        textStyle={props.grayBoxTextStyle}
        onPress={grayBox.onPress}
        data={grayBox.data}
        key={`${index + 1}-row3`}>
        {grayBox.text}
      </GrayBox>
    ))}
  </View>
);

GrayBoxContainer.propTypes = {
  grayBoxesData: PropTypes.object.isRequired,
  grayBoxTextStyle: PropTypes.object,
};

GrayBoxContainer.defaultProps = {
  grayBoxTextStyle: {},
};

const styles = {
  grayBoxesContainer: {
    flex: 1,
    marginVertical: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    width: '94%',
    height: SCREEN_HEIGHT * 0.34,
  },
};

export default GrayBoxContainer;
