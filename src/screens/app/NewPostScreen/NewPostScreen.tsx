import React from 'react'

import {Button, ScreenContainer, Text} from '@components'
import {AppBottomTabScreenProps} from '@routes'

export function NewPostScreen({
  navigation,
}: AppBottomTabScreenProps<'NewPostScreen'>) {
  return (
    <ScreenContainer>
      <Text variant="headingMedium">NewPostScreen</Text>
      <Button
        onPress={() => navigation.navigate('SettingsScreen')}
        title="Settings"
      />
    </ScreenContainer>
  )
}
