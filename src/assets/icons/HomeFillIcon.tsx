import {Svg, Path} from 'react-native-svg'
import {IconProps} from './icon'

export function HomeFillIcon({
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
        d="M11.877.724a4.262 4.262 0 0 0-4.754 0l-4.914 3.25C.838 4.88 0 6.501 0 8.25v6.746C0 17.76 2.053 20 4.586 20H6v-3.5a3.5 3.5 0 1 1 7 0V20h1.414C16.947 20 19 17.76 19 14.997V8.251c0-1.749-.838-3.371-2.21-4.278L11.878.724Z"
        fill={color}
      />
    </Svg>
  )
}
