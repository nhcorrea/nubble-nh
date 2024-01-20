import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconProps} from './icon';

export function CommentIcon({
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
        d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-4.744-1.195l-3.872.72a.78.78 0 0 1-.91-.91l.721-3.87A9.96 9.96 0 0 1 0 10Zm10-8.44a8.44 8.44 0 0 0-7.31 12.66.78.78 0 0 1 .09.533l-.563 3.03 3.03-.564a.78.78 0 0 1 .534.092A8.44 8.44 0 1 0 10 1.56Z"
        fill={color}
      />
    </Svg>
  );
}
