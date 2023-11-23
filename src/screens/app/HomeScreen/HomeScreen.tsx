import React from 'react'

import {Button, ScreenContainer, Text} from '@components'
import {AppScreenProps} from '@routes'

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
