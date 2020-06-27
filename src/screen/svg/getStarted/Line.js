import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width={3} height={75} fill="none" {...props}>
    <Path d="M1 1l1 73.486" stroke="#fff" strokeOpacity={0.7} />
  </Svg>
)

export default SvgComponent