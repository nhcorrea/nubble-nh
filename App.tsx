import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {Router} from '@routes';
import {theme} from '@theme';

/*TODO: fonts no ios*/

const queryClient = new QueryClient();

export function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Router />
          <Toast />
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
