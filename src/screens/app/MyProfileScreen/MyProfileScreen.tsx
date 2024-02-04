import React from 'react';

import {Button, ScreenContainer, Text} from '@components';
import {AppTabScreensProps} from '@routes';

export function MyProfileScreen({
  navigation,
}: AppTabScreensProps<'MyProfileScreen'>) {
  return (
    <ScreenContainer>
      <Text variant="headingMedium">MyProfileScreen</Text>
      <Button
        onPress={() => navigation.navigate('SettingsScreen')}
        title="Settings"
      />
    </ScreenContainer>
  );
}
