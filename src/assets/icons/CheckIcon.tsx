import {Svg, Path} from 'react-native-svg'
import {IconProps} from './icon'

export function CheckIcon({
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
        d="M18.684 4.316a1.08 1.08 0 0 1 0 1.528l-10.08 10.08a1.08 1.08 0 0 1-1.528 0l-5.76-5.76a1.08 1.08 0 1 1 1.528-1.528l4.996 4.997 9.316-9.317a1.08 1.08 0 0 1 1.528 0Z"
        fill={color}
      />
    </Svg>
  )
}
