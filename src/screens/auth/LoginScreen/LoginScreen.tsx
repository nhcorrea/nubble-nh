import React from 'react'
import {Alert, TouchableOpacity} from 'react-native'

import {zodResolver} from '@hookform/resolvers/zod'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {useForm} from 'react-hook-form'

import {
  FormTextInput,
  FormPasswordInput,
  Box,
  Button,
  Text,
  ScreenContainer,
} from '@components'
import {RootStackParamList} from '@routes'

import {LoginSchema, loginSchema} from './loginSchema'
type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({navigation}: Props) {
  function navigateToSignUp() {
    navigation.navigate('SignUpScreen')
  }
  function navigateToForgotPassword() {
    navigation.navigate('ForgotPassword')
  }
  function submitForm({email, password}: LoginSchema) {
    Alert.alert(email, password)
  }
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  })
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
        <FormTextInput
          control={control}
          name="email"
          placeholder="Digite seu e-mail"
          label="Email"
        />

        <FormPasswordInput
          name="password"
          control={control}
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
        <Button
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
          title="Entrar"
        />
        <Button
          onPress={navigateToSignUp}
          preset="outline"
          title="Criar uma conta"
        />
      </Box>
    </ScreenContainer>
  )
}
