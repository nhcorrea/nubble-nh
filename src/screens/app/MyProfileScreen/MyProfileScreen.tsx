import React from 'react';

import {Box} from '#/components/Box/Box';
import {Icon} from '#/components/Icon/Icon';
import {ScreenContainer} from '#/components/ScreenContainer/ScreenContainer';
import {Text} from '#/components/Text/Text';
import {AppTabScreensProps} from '#/routes/routesTypes';
import {useAuthCredentials} from '#/services/auth/useAuthCredentials';

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
