import { Svg, Path } from 'react-native-svg'
import { IconProps } from './icon'

export function FlashOffIcon({
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
        d="M6.545 2.396 5.93 9.881v.006a.558.558 0 0 0 .098.38c.066.09.14.126.204.135l.017.001h.018l2.58-.006a.826.826 0 0 1 .825.874l-.303 5.17c1.777-2.99 4.314-7.274 4.622-7.88a.273.273 0 0 1 .004-.008c.14-.268.029-.577-.137-.684a.247.247 0 0 0-.134-.042h-2.762a.826.826 0 0 1-.777-1.108l1.49-4.106c.087-.307-.087-.552-.23-.607a.228.228 0 0 0-.082-.015H6.875c-.098 0-.302.102-.33.405Zm1.513 16.25ZM4.9 2.251C4.99 1.24 5.783.339 6.875.339h4.49c.23 0 .456.043.67.125m0 0c1.066.407 1.533 1.62 1.214 2.652a.822.822 0 0 1-.013.037L12.14 6.175h1.585c.368 0 .723.109 1.03.306.94.607 1.206 1.872.707 2.833-.445.87-4.649 7.934-5.985 10.177-.577.968-1.965.433-1.906-.588l.402-6.852-1.71.004H6.24a2.33 2.33 0 0 1-.164-.01H6.07l-.015-.001c-1.158-.129-1.864-1.226-1.77-2.301L4.9 2.257v-.006"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.58.58a.82.82 0 0 1 1.158 0l15.225 15.225a.82.82 0 0 1-1.158 1.158L1.579 1.738a.82.82 0 0 1 0-1.159Z"
        fill={color}
      />
    </Svg>
  )
}
