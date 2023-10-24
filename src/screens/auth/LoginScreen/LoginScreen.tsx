import { ScreenContainer } from '../../../components/ScreenContainer'
import { Box, Button, Text, TextInput } from '../../../components'
import { Icon } from '../../../components/Icon'

export function LoginScreen() {
  return (
    <ScreenContainer>
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
        <TextInput
          secureTextEntry={true}
          boxProps={{ gap: 's4' }}
          RightComponent={<Icon name="EyeOn" color="gray2" />}
          label="Senha"
          placeholder="Digite sua senha"
        />
      </Box>
      <Text mt="s8" variant="paragraphSmallBold" color="primary">
        Esqueci minha senha
      </Text>
      <Box mt="s48" gap="s12">
        <Button title="Entrar" />
        <Button preset="outline" title="Criar uma conta" />
      </Box>
    </ScreenContainer>
  )
}
