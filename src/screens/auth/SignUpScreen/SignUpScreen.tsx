import {
  Box,
  Button,
  Text,
  TextInput,
  ScreenContainer,
  PasswordInput,
} from '../../../components'
import {useResetNavigationReset} from '../../../hooks/useResetNavigationReset'

export function SignUpScreen() {
  const {reset} = useResetNavigationReset()
  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'CheckRound',
        color: 'success',
      },
    })
  }
  return (
    <ScreenContainer canGoBack>
      <Box flex={1} mt="s24" gap="s32">
        <Text variant="headingLarge" color="backgroundContrast">
          Criar uma conta
        </Text>
        <Box gap="s16">
          <TextInput placeholder="@" label="Seu username" />
          <TextInput
            placeholder="Digite seu nome completo"
            label="Nome Completo"
          />
          <TextInput
            placeholder="Digite seu e-mail"
            label="E-mail"
            keyboardType="email-address"
          />
          <PasswordInput placeholder="Digite sua senha" label="Senha" />
        </Box>
        <Button mt="s16" title="Criar uma conta" onPress={submitForm} />
      </Box>
    </ScreenContainer>
  )
}
