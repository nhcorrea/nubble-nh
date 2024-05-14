import React from 'react';

import {useAuthSignOut} from '@domain';

import {Button, ScreenContainer, Text} from '@components';
import {AppStackScreensProps} from '@routes';

export function SettingsScreen({
  navigation,
}: AppStackScreensProps<'SettingsScreen'>) {
  const {isLoading, signOut} = useAuthSignOut();

  function handleSignOut() {
    signOut();
  }

  return (
    <ScreenContainer>
      <Text variant="headingMedium">SettingsScreen</Text>
      <Button onPress={() => navigation.navigate('HomeScreen')} title="Home" />
      <Button
        onPress={handleSignOut}
        title="Sair da conta"
        loading={isLoading}
      />
    </ScreenContainer>
  );
}
