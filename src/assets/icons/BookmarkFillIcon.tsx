import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconProps} from './icon';

export function BookmarkFillIcon({
  color = '#000',
  size = '20',
  width,
  height,
}: IconProps) {
  return (
    <Svg
      width={width ? width : size}
      height={height ? height : size}
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2.82A2.82 2.82 0 0 1 4.82 0h10.257a2.82 2.82 0 0 1 2.82 2.82v16.41a.769.769 0 0 1-1.185.648l-6.07-3.902a1.282 1.282 0 0 0-1.386 0l-6.07 3.902A.769.769 0 0 1 2 19.23V2.82Z"
        fill={color}
      />
    </Svg>
  );
}
