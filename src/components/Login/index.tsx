import { Box } from '../Box'
import { ScreenContainer } from '../ScreenContainer'
import { Text } from '../Text'
import { Button } from '../Button'
import { TextInput } from '../TextInput'

export function Login() {
  return (
    <ScreenContainer>
      <Box flex={1} backgroundColor="background" padding="s24">
        <Box gap="s8">
          <Text color="backgroundContrast" variant="headingLarge">
            Olá
          </Text>
          <Text color="backgroundContrast" variant="paragraphLarge">
            Digite seu e-mail e senha para entrar
          </Text>
        </Box>
        <Box mt="s40" gap="s16">
          <TextInput label="Email" placeholder="Digite seu e-mail" />
          <TextInput label="Senha" placeholder="Digite sua senha" />
        </Box>
        <Text mt="s8" variant="paragraphSmallBold" color="primary">
          Esqueci minha senha
        </Text>
        <Box mt="s48" gap="s12">
          <Button title="Entrar" />
          <Button preset="outline" title="Criar uma conta" />
        </Box>
      </Box>
    </ScreenContainer>
  )
}
