import React, {PropsWithChildren} from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {theme} from '@theme';

export function UtilityStack({children}: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </ThemeProvider>
  );
}
