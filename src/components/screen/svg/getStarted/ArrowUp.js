/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from './node_modules/react';

const SvgComponent = (props) => (
  <svg width={8} height={18} fill="none" {...props}>
    <path
      d="M4 16.083V5M1 7l3-6 3 6"
      stroke="#fff"
      strokeOpacity={0.85}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
