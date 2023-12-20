import React from 'react'

import {Button, ScreenContainer, Text} from '@components'
import {AppTabScreensProps} from '@routes'

export function NewPostScreen({
  navigation,
}: AppTabScreensProps<'NewPostScreen'>) {
  return (
    <ScreenContainer>
      <Text variant="headingMedium">NewPostScreen</Text>
      <Button
        onPress={() =>
          navigation.navigate('BottomTabStack', {screen: 'FavoriteScreen'})
        }
        title="Settings"
      />
    </ScreenContainer>
  )
}
