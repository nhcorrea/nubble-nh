import {Svg, Path} from 'react-native-svg'
import {IconProps} from './icon'
import React from 'react'

export function MessageIcon({
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
        d="m18 6.502-6.827 4.235a1.402 1.402 0 0 1-.134.073l-.046.03c-.507.314-1.36.3-1.894-.031L2 6.405V14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6.502Zm-7.922 2.626L2.973 4.72a1.602 1.602 0 0 0-.356-.162C2.977 4.213 3.465 4 4 4h12c.555 0 1.06.23 1.423.598-.08.033-.156.07-.227.115l-7.118 4.415ZM16 2H4C1.788 2 0 3.788 0 6v8c0 2.212 1.788 4 4 4h12c2.212 0 4-1.788 4-4V6c0-2.212-1.788-4-4-4Z"
        fill={color}
      />
    </Svg>
  )
}
