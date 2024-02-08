import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconProps} from './icon';

export function CloseIcon({
  color = '#000',
  size = '20',
  width,
  height,
}: IconProps) {
  return (
    <Svg width={width || size} height={height || size} fill="none">
      <Path
        d="m2 2 16.228 17M2.773 19 19 2"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  );
}
