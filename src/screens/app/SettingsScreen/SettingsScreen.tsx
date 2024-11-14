import React from 'react';

import {Button} from '#/components/Button/Button';
import {ScreenContainer} from '#/components/ScreenContainer/ScreenContainer';
import {Text} from '#/components/Text/Text';
import {useAuthSignOut} from '#/domain/Auth/useCases/useAuthSignOut';
import {AppStackScreensProps} from '#/routes/routesTypes';

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
