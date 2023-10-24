import { Box, Button, Text, TextInput } from '../../../components'
import { Icon } from '../../../components/Icon'
import { ScreenContainer } from '../../../components/ScreenContainer'

export function SignUpScreen() {
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
          <TextInput placeholder="Digite seu e-mail" label="E-mail" />
          <TextInput
            placeholder="Digite sua senha"
            label="Senha"
            RightComponent={<Icon name="EyeOn" color="gray2" />}
          />
        </Box>
        <Button mt="s16" title="Criar uma conta" />
      </Box>
    </ScreenContainer>
  )
}
