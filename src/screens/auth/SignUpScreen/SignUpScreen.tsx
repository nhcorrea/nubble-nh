import {useForm} from 'react-hook-form'
import {Box, Button, Text, ScreenContainer, FormTextInput} from '@components'
import {useResetNavigation} from '@hooks'
import {SignUpSchema, signUpSchema} from './signUpSchema'
import React from 'react'

import {zodResolver} from '@hookform/resolvers/zod'
export function SignUpScreen() {
  const {reset} = useResetNavigation()
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
  const {control} = useForm<SignUpSchema>({
    defaultValues: {
      name: '',
      email: '',
      username: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  })
  return (
    <ScreenContainer canGoBack>
      <Box flex={1} mt="s24" gap="s32">
        <Text variant="headingLarge" color="backgroundContrast">
          Criar uma conta
        </Text>
        <Box gap="s16">
          <FormTextInput
            control={control}
            name="username"
            placeholder="@"
            label="Seu username"
          />

          <FormTextInput
            control={control}
            name="name"
            autoCapitalize="words"
            placeholder="Digite seu nome completo"
            label="Nome Completo"
          />

          <FormTextInput
            control={control}
            name="email"
            placeholder="Digite seu e-mail"
            label="E-mail"
            keyboardType="email-address"
          />

          <FormTextInput
            control={control}
            name="password"
            placeholder="Digite sua senha"
            label="Senha"
          />
        </Box>
        <Button mt="s16" title="Criar uma conta" onPress={submitForm} />
      </Box>
    </ScreenContainer>
  )
}
