import React from 'react'

import {Svg, Path} from 'react-native-svg'

import {IconProps} from './icon'

export function TrashIcon({
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
        d="M4.525 19c-.413 0-.766-.147-1.06-.44a1.445 1.445 0 0 1-.44-1.06V3.25H2v-1.5h4.7V1h6.6v.75H18v1.5h-1.025V17.5c0 .4-.15.75-.45 1.05-.3.3-.65.45-1.05.45H4.525Zm10.95-15.75H4.525V17.5h10.95V3.25Zm-8.3 12.1h1.5V5.375h-1.5v9.975Zm4.15 0h1.5V5.375h-1.5v9.975Z"
        fill={color}
      />
    </Svg>
  )
}
