import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconProps} from './icon';

export function EyeOnIcon({
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
        d="M5.133 13.528c-1.343-.976-2.517-2.25-3.412-3.557C4.021 7.16 6.491 4.538 10 4.538c3.508 0 5.979 2.621 8.279 5.433-.895 1.306-2.07 2.581-3.412 3.557-1.501 1.091-3.17 1.78-4.867 1.78s-3.366-.688-4.867-1.78ZM10 3C5.467 3 2.484 6.58.171 9.44a.77.77 0 0 0-.052.894c1.013 1.604 2.432 3.219 4.11 4.439C5.905 15.99 7.884 16.846 10 16.846s4.095-.855 5.771-2.073c1.678-1.22 3.097-2.835 4.11-4.44a.77.77 0 0 0-.052-.894C17.516 6.58 14.533 3 10 3Zm0 4.103a2.82 2.82 0 1 0 0 5.64 2.82 2.82 0 0 0 0-5.64Zm-1.282 2.82a1.282 1.282 0 1 1 2.564 0 1.282 1.282 0 0 1-2.564 0Z"
        fill={color}
      />
    </Svg>
  );
}
