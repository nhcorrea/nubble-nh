import React from 'react';
import {
  ActivityIndicator,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {Box} from '#/components/Box/Box';
import {ScreenContainer} from '#/components/ScreenContainer/ScreenContainer';
import {Text} from '#/components/Text/Text';
import {useUserGetById} from '#/domain/User/useCases/useUserGetById';
import {AppScreenProps} from '#/routes/routesTypes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
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
        style={styles.scrollView}
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
  scrollView: {
    flex: 1,
  },
});
