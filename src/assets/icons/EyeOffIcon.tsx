import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconProps} from './icon';

export function EyeOffIcon({
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
        d="M1.313.225A.77.77 0 1 0 .225 1.313l3.963 3.963C2.635 6.507 1.328 8.086.17 9.516a.77.77 0 0 0-.052.895c1.013 1.604 2.432 3.219 4.11 4.439 1.676 1.218 3.655 2.073 5.771 2.073 1.623 0 3.165-.503 4.55-1.285l4.137 4.137a.77.77 0 1 0 1.088-1.088L1.313.225Zm.408 9.823c1.1-1.347 2.252-2.668 3.563-3.676l2.253 2.253a2.82 2.82 0 0 0 3.838 3.838l2.039 2.039c-1.096.558-2.248.883-3.414.883-1.697 0-3.366-.689-4.867-1.78-1.343-.976-2.517-2.25-3.412-3.557Zm8.46 1.221-1.45-1.45a1.282 1.282 0 0 0 1.45 1.45ZM10 3.077a.77.77 0 1 0 0 1.538c3.508 0 5.979 2.621 8.279 5.433-.232.338-.483.675-.751 1.006a.77.77 0 0 0 1.194.97c.428-.528.816-1.07 1.16-1.613a.77.77 0 0 0-.053-.895c-2.313-2.859-5.296-6.44-9.829-6.44Z"
        fill={color}
      />
    </Svg>
  );
}
