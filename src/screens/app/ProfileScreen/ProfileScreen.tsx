import React from 'react';
import {
  ActivityIndicator,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {useUserGetById} from '@domain';

import {Box, ScreenContainer, Text} from '@components';
import {AppTabScreensProps} from '@routes';

export function ProfileScreen({
  route,
}: AppTabScreensProps<'ProfileScreen'>): React.JSX.Element {
  const {userId} = route.params;
  const {user, isError, isLoading, isFetching, refetch} =
    useUserGetById(userId);

  return (
    <ScreenContainer canGoBack flex={1} title="Meu perfil">
      {isLoading && <ActivityIndicator size="large" color="primary" />}
      {isError && (
        <Text variant="paragraphMedium">Erro ao carregar perfil</Text>
      )}
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        refreshControl={
          <RefreshControl onRefresh={refetch} refreshing={isFetching} />
        }>
        <Box gap="s16" alignItems="center" mt="s24" flex={1}>
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
      </ScrollView>
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
