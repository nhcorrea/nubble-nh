import React from 'react'

import {Svg, Path} from 'react-native-svg'

import {IconProps} from './icon'

export function ProfileFillIcon({
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
        d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Zm4.957 6.736c-.184.3-.519.352-.751.116-.234-.237-.275-.674-.092-.976l.413.419-.412-.42.001-.002.002-.004.007-.011a2.226 2.226 0 0 1 .092-.137c.061-.086.15-.203.266-.34a6.42 6.42 0 0 1 1.061-.985C6.501 13.686 7.959 13 10 13c2.041 0 3.499.687 4.456 1.396.477.354.826.71 1.06.985a4.934 4.934 0 0 1 .359.477l.007.01.002.005.001.001c0 .001 0 .002-.396.405l.397-.403c.183.302.142.74-.092.976-.232.236-.568.184-.75-.116h-.001l-.007-.011a3.627 3.627 0 0 0-.239-.312 5.29 5.29 0 0 0-.873-.81c-.803-.594-2.077-1.212-3.924-1.212s-3.121.618-3.924 1.213a5.29 5.29 0 0 0-.873.809 3.668 3.668 0 0 0-.239.312l-.007.011ZM9.999 3.718a3.494 3.494 0 1 0 0 6.987 3.494 3.494 0 0 0 0-6.987ZM7.916 7.212a2.083 2.083 0 1 1 4.167 0 2.083 2.083 0 0 1-4.167 0Z"
        fill={color}
      />
    </Svg>
  )
}
