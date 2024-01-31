import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

import {useAppSafeArea, useAppTheme} from '@hooks';

import {Box, BoxProps} from '../Box/Box';

import {ScrollViewContainer, ViewContainer} from './Containers/Containers';
import {ScreenHeader} from './Containers/ScreenHeader';

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
  title,
  ...boxProps
}: Props) {
  const {bottom, top} = useAppSafeArea();
  const {colors} = useAppTheme();
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
          <ScreenHeader canGoBack={canGoBack} title={title} />
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
