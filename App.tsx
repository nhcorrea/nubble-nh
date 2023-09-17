import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/theme'
import { Login } from './src/components'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
