import React from 'react';

import {Button} from '#/components/Button/Button';
import {ScreenContainer} from '#/components/ScreenContainer/ScreenContainer';
import {Text} from '#/components/Text/Text';
import {AppTabScreensProps} from '#/routes/routesTypes';

export function FavoriteScreen({
  navigation,
}: AppTabScreensProps<'FavoriteScreen'>) {
  return (
    <ScreenContainer>
      <Text variant="headingMedium">FavoriteScreen</Text>
      <Button
        onPress={() => navigation.navigate('FavoriteScreen')}
        title="Settings"
      />
    </ScreenContainer>
  );
}
