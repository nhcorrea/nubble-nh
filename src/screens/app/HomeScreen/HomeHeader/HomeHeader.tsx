import React from 'react'

import {SimpleLogo} from '@brand'

import {Box, BoxProps, Icon} from '@components'
import {useAppSafeArea} from '@hooks'

export function HomeHeader() {
  const {top} = useAppSafeArea()
  return (
    <Box {...wrapperStyle} style={{paddingTop: top}}>
      <SimpleLogo width={70} />
      <Box flexDirection="row" gap="s24">
        <Icon name="Search" />
        <Icon name="Bell" />
        <Icon name="Chat" />
      </Box>
    </Box>
  )
}

const wrapperStyle: BoxProps = {
  flexDirection: 'row',
  paddingHorizontal: 's24',
  paddingBottom: 's24',
  alignItems: 'center',
  justifyContent: 'space-between',
}
