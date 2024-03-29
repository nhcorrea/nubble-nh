import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconProps} from './icon';

export function FlashOnIcon({
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
        d="m6.307 2.093-.624 7.613v.007a.568.568 0 0 0 .1.387c.066.09.143.128.207.136l.017.002h.019l2.623-.006a.84.84 0 0 1 .84.889l-.308 5.258c1.808-3.041 4.388-7.399 4.701-8.015l.005-.008c.142-.273.03-.588-.14-.696a.251.251 0 0 0-.136-.043h-2.81a.84.84 0 0 1-.79-1.127l1.516-4.177c.088-.313-.089-.562-.234-.617a.233.233 0 0 0-.083-.016H6.643c-.1 0-.307.104-.336.413Zm1.539 16.53ZM4.633 1.945C4.726.915 5.533 0 6.643 0h4.567c.234 0 .465.043.682.126m0 0c1.085.415 1.56 1.65 1.235 2.698a.851.851 0 0 1-.013.039L12 5.937h1.612c.375 0 .736.11 1.047.31v.001c.957.617 1.228 1.904.72 2.882-.452.885-4.729 8.07-6.089 10.353-.586.984-1.998.44-1.938-.6l.41-6.97-1.74.005a1.1 1.1 0 0 1-.018 0h-.006l-.084-.003c-.03-.001-.06-.004-.083-.006l-.006-.001-.015-.002c-1.178-.13-1.897-1.247-1.8-2.34l.624-7.615v-.006"
        fill={color}
      />
    </Svg>
  );
}
