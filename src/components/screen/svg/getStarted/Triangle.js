import React from './node_modules/react';
import Svg, { Path } from './node_modules/react-native-svg';

const Triangle = props => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path d="M6 0l5.196 11.25H.804L6 0z" fill="#fff" />
  </Svg>
);

export default Triangle;
