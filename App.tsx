import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from '@routes';
import {theme} from '@theme';

/*TODO: fonts no ios*/

export function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
