import {
  Box,
  Button,
  Text,
  TextInput,
  ScreenContainer,
  PasswordInput,
} from '../../../components'
import {TouchableOpacity} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../../routes/Routes'

type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({navigation}: Props) {
  function navigateToSignUp() {
    navigation.navigate('SignUpScreen')
  }
  function navigateToForgotPassword() {
    navigation.navigate('ForgotPassword')
  }
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
          boxProps={{gap: 's4'}}
          label="Senha"
          placeholder="Digite sua senha"
        />
      </Box>
      <TouchableOpacity onPress={navigateToForgotPassword}>
        <Text mt="s8" variant="paragraphSmallBold" color="primary">
          Esqueci minha senha
        </Text>
      </TouchableOpacity>
      <Box mt="s48" gap="s12">
        <Button title="Entrar" />
        <Button
          onPress={navigateToSignUp}
          preset="outline"
          title="Criar uma conta"
        />
      </Box>
    </ScreenContainer>
  )
}
