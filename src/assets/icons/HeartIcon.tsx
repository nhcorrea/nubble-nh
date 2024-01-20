import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconProps} from './icon';

export function HeartIcon({
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
        d="M10 2.18A6.25 6.25 0 0 1 13.652 1c1.708 0 3.334.703 4.52 1.934A6.57 6.57 0 0 1 20 7.494a6.57 6.57 0 0 1-1.829 4.56c-.669.694-1.339 1.405-2.017 2.125l-.006.007c-1.374 1.46-2.78 2.954-4.241 4.361l-.002.002-.004.004-.002.002a2.76 2.76 0 0 1-3.884-.085l.516-.498-.516.498-6.187-6.416c-2.437-2.528-2.437-6.592 0-9.12l.443.427-.443-.427a6.246 6.246 0 0 1 8.173-.753Zm3.651.255a4.83 4.83 0 0 0-3.18 1.201.717.717 0 0 1-.944 0 4.813 4.813 0 0 0-6.666.294c-1.902 1.972-1.902 5.156 0 7.128l6.186 6.416c.504.522 1.337.54 1.863.041h.001c1.434-1.382 2.819-2.853 4.199-4.319l.002-.002c.676-.718 1.351-1.435 2.027-2.136a5.136 5.136 0 0 0 1.426-3.564A5.135 5.135 0 0 0 17.14 3.93a4.844 4.844 0 0 0-3.488-1.495Z"
        fill={color}
      />
    </Svg>
  );
}
