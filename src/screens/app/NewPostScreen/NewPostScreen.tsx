import React from 'react';

import {Button} from '#/components/Button/Button';
import {ScreenContainer} from '#/components/ScreenContainer/ScreenContainer';
import {Text} from '#/components/Text/Text';
import {AppTabScreensProps} from '#/routes/routesTypes';

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
  );
}
