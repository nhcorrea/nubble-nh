import React from 'react'

import {Button, ScreenContainer, Text} from '@components'
import {AppBottomTabScreenProps} from '@routes'

export function FavoriteScreen({
  navigation,
}: AppBottomTabScreenProps<'FavoriteScreen'>) {
  return (
    <ScreenContainer>
      <Text variant="headingMedium">FavoriteScreen</Text>
      <Button
        onPress={() => navigation.navigate('FavoriteScreen')}
        title="Settings"
      />
    </ScreenContainer>
  )
}
