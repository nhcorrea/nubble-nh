import React from 'react'

import {AppScreenProps} from 'src/utils/routeParamList'

import {Button, ScreenContainer, Text} from '@components'

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <ScreenContainer>
      <Text variant="headingMedium">SettingsScreen</Text>
      <Button onPress={() => navigation.navigate('HomeScreen')} title="Home" />
    </ScreenContainer>
  )
}
