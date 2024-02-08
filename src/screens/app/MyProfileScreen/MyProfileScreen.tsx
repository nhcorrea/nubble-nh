import React from 'react';
import {ActivityIndicator, Image, StyleSheet} from 'react-native';

import {useUserGetById} from '@domain';

import {Box, ScreenContainer, Text} from '@components';
import {AppTabScreensProps} from '@routes';

export function MyProfileScreen({
  route,
}: AppTabScreensProps<'MyProfileScreen'>): React.JSX.Element {
  const {userId} = route.params;
  const {user, error, isLoading} = useUserGetById(userId);

  return (
    <ScreenContainer canGoBack title="Meu perfil">
      {isLoading && <ActivityIndicator size="large" color="primary" />}
      {error && <Text variant="paragraphMedium">Erro ao carregar perfil</Text>}
      {user && (
        <Box gap="s16" alignItems="center" mt="s24">
          <Image source={{uri: user?.profileUrl}} style={styles.avatar} />
          <Box gap="s4" alignItems="center">
            <Text variant="headingMedium" color="grayBlack">
              {user?.fullName}
            </Text>
            <Text variant="paragraphLarge" color="gray1">
              @{user?.username}
            </Text>
          </Box>
        </Box>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
});
