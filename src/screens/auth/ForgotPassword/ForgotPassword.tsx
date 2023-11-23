import React from 'react'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'

import {Button, ScreenContainer, Text, FormTextInput} from '@components'
import {useResetNavigation} from '@hooks'

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema'

export function ForgotPassword() {
  const {reset} = useResetNavigation()

  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onChange',
  })

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
      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite seu e-mail"
        label="Email"
      />
      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        mt="s48"
        title="Recuperar senha"
      />
    </ScreenContainer>
  )
}
