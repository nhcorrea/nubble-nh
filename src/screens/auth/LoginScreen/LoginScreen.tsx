import { ScreenContainer } from '../../../components/ScreenContainer'
import { Box, Button, Text, TextInput } from '../../../components'
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput'
import { TouchableOpacity } from 'react-native'

export function LoginScreen() {
  return (
    <ScreenContainer scrollEnabled>
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
        <PasswordInput
          boxProps={{ gap: 's4' }}
          label="Senha"
          placeholder="Digite sua senha"
        />
      </Box>
      <TouchableOpacity>
        <Text mt="s8" variant="paragraphSmallBold" color="primary">
          Esqueci minha senha
        </Text>
      </TouchableOpacity>
      <Box mt="s48" gap="s12">
        <Button title="Entrar" />
        <Button preset="outline" title="Criar uma conta" />
      </Box>
    </ScreenContainer>
  )
}
