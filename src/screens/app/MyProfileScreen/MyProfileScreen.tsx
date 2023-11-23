import React from 'react'

import {Button, ScreenContainer, Text} from '@components'
import {AppBottomTabScreenProps} from '@routes'

export function MyProfileScreen({
  navigation,
}: AppBottomTabScreenProps<'MyProfileScreen'>) {
  return (
    <ScreenContainer>
      <Text variant="headingMedium">MyProfileScreen</Text>
      <Button
        onPress={() => navigation.navigate('SettingsScreen')}
        title="Settings"
      />
    </ScreenContainer>
  )
}
