import {ThemeProvider} from '@shopify/restyle'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {theme} from './src/theme'
import {Router} from './src/routes/Routes'

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
