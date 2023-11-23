import {ThemeProvider} from '@shopify/restyle'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {theme} from '@theme'
import {Router} from '@routes'
import React from 'react'

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
