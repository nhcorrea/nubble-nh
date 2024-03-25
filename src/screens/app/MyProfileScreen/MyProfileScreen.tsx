import React from 'react';

import {useAuthCredentials} from '@services';

import {Box, Icon, ScreenContainer, Text} from '@components';
import {AppTabScreensProps} from '@routes';

export function MyProfileScreen({
  navigation,
}: AppTabScreensProps<'MyProfileScreen'>) {
  const {authCredentials} = useAuthCredentials();
  const name = authCredentials?.user.fullName;

  function goToSettings() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <ScreenContainer>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text variant="headingMedium">{name}</Text>
        <Icon name="Settings" onPress={goToSettings} />
      </Box>
    </ScreenContainer>
  );
}
