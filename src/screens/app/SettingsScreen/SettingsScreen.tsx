import React from 'react';

import {Button, ScreenContainer, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <ScreenContainer>
      <Text variant="headingMedium">SettingsScreen</Text>
      <Button onPress={() => navigation.navigate('HomeScreen')} title="Home" />
    </ScreenContainer>
  );
}
