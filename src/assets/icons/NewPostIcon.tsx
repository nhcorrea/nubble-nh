import {Svg, Path} from 'react-native-svg'
import {IconProps} from './icon'
import React from 'react'

export function NewPostIcon({
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
        d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0ZM1.41 10a8.59 8.59 0 1 1 17.18 0 8.59 8.59 0 0 1-17.18 0Zm9.295-3.718a.705.705 0 0 0-1.41 0v3.013H6.282a.705.705 0 0 0 0 1.41h3.013v3.013a.705.705 0 0 0 1.41 0v-3.013h3.013a.705.705 0 0 0 0-1.41h-3.013V6.282Z"
        fill={color}
      />
    </Svg>
  )
}
