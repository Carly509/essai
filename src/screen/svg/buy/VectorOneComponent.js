import React from 'react'
import Svg, { Path } from 'react-native-svg'

const VectorOneComponent = props => (
  <Svg width={8} height={14} fill="none" {...props}>
    <Path
      d="M1 13l6-6-6-6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default VectorOneComponent