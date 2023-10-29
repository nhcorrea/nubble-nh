import {Button, ScreenContainer, Text, TextInput} from '../../../components'
import {useResetNavigationReset} from '../../../hooks/useResetNavigationReset'

export function ForgotPassword() {
  const {reset} = useResetNavigationReset()

  function submitForm() {
    reset({
      title: `Enviamos as${'\n'} instruções para seu e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'MessageRound',
        color: 'primary',
      },
    })
  }

  return (
    <ScreenContainer canGoBack>
      <Text mt="s24" variant="headingLarge">
        Esqueci minha{'\n'}senha
      </Text>
      <Text mb="s32" mt="s16" variant="paragraphLarge">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput label="Email" placeholder="Digite seu e-mail" />
      <Button onPress={submitForm} mt="s48" title="Recuperar senha" />
    </ScreenContainer>
  )
}
