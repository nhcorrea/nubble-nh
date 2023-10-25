import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import { LoginScreen } from './src/screens/auth/LoginScreen/LoginScreen'
import { SignUpScreen } from './src/screens/auth/SignUpScreen/SignUpScreen'
import { LoginScreen } from './src/screens/auth/LoginScreen/LoginScreen'

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <LoginScreen />
        {/* <SignUpScreen /> */}
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
