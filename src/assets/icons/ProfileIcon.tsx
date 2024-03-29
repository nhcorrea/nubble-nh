import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconProps} from './icon';

export function ProfileIcon({
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
        d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10a9.959 9.959 0 0 1-2.29 6.368A9.98 9.98 0 0 1 10 20C4.477 20 0 15.523 0 10Zm18.59 0a8.55 8.55 0 0 1-1.486 4.83 8.17 8.17 0 0 0-1.244-.866c-1.26-.72-3.175-1.416-5.86-1.416-2.684 0-4.6.696-5.858 1.416a8.162 8.162 0 0 0-1.246.867A8.59 8.59 0 1 1 18.59 10ZM10 18.59a8.565 8.565 0 0 1-6.216-2.662c.24-.208.59-.473 1.057-.74 1.055-.603 2.731-1.23 5.16-1.23 2.428 0 4.104.627 5.159 1.23.467.267.816.531 1.057.74A8.565 8.565 0 0 1 10 18.59Zm0-14.872a3.494 3.494 0 1 0 0 6.987 3.494 3.494 0 0 0 0-6.987ZM7.915 7.212a2.083 2.083 0 1 1 4.167 0 2.083 2.083 0 0 1-4.167 0Z"
        fill={color}
      />
    </Svg>
  );
}
