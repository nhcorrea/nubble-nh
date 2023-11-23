import React from 'react'

import {AppScreenProps} from 'src/utils/routeParamList'

import {Button, ScreenContainer, Text} from '@components'

export function HomeScreen({navigation}: AppScreenProps<'HomeScreen'>) {
  return (
    <ScreenContainer>
      <Text variant="headingMedium">HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('SettingsScreen')}
        title="Settings"
      />
    </ScreenContainer>
  )
}
