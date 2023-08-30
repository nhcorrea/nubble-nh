import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/theme'
import { Text } from './src/components/Text'
import { Button } from './src/components'

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Button loading title="Entrar" />
    </ThemeProvider>
  )
}
