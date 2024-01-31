import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {useAppSafeArea, useAppTheme} from '@hooks';

import {Box, BoxProps} from '../Box/Box';
import {TouchableOpacityBox} from '../Button/Button';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

import {ScrollViewContainer, ViewContainer} from './Containers/Containers';

interface Props extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollEnabled?: boolean;
  title?: string;
}

export function ScreenContainer({
  children,
  scrollEnabled = false,
  canGoBack = false,
  style,
  // title,
  ...boxProps
}: Props) {
  const {bottom, top} = useAppSafeArea();
  const {colors} = useAppTheme();
  const navigation = useNavigation();
  const Container = scrollEnabled ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.flex}>
      <Container backgroundColor={colors.background}>
        <Box
          style={[
            {
              paddingTop: top,
              paddingBottom: bottom,
            },
            style,
          ]}
          flex={1}
          paddingHorizontal="s24"
          backgroundColor="background"
          {...boxProps}>
          {canGoBack ? (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              flexDirection="row"
              gap="s8">
              <Icon name="Arrow" color="primary" />
              <Text variant="paragraphMedium">Voltar</Text>
            </TouchableOpacityBox>
          ) : null}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
