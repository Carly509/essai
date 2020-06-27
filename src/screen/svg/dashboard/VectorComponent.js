import React from 'react'
import Svg, { Path } from 'react-native-svg'
const VectorComponent = props => (
  <Svg width={8} height={16} fill="none" {...props}>
    <Path
      d="M1 7l3-6 3 6M4 14.083V3"
      stroke="#8B8989"
      strokeOpacity={0.85}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default VectorComponent