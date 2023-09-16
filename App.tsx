import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/theme'
import { Box, Button } from './src/components'
import { BellOnIcon, FlashOffIcon } from './src/assets/icons'

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Box padding="s8">
        <Button marginBottom="s8" preset="filled" title="Entrar" />
        <Button marginBottom="s8" preset="filled" loading title="Entrar" />
        <Button marginBottom="s8" preset="outline" title="Entrar" />
        <Button marginBottom="s8" preset="outline" loading title="Entrar" />
        <BellOnIcon color="#fff" />
        <FlashOffIcon color="#fff" />
      </Box>
    </ThemeProvider>
  )
}
