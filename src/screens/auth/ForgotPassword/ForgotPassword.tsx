import React from 'react';

import {useAuthForgotPassword} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {Button, ScreenContainer, Text, FormTextInput} from '@components';
import {useResetNavigation} from '@hooks';
import {AuthStackParamList} from '@routes';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

const RESET_PARAMS: AuthStackParamList['SuccessScreen'] = {
  title: `Enviamos as${'\n'} instruções para seu e-mail`,
  description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
  icon: {
    name: 'MessageRound',
    color: 'primary',
  },
};

export function ForgotPassword() {
  const {reset} = useResetNavigation();

  const {showToast} = useToastService();

  const {requestNewPassword, isLoading} = useAuthForgotPassword({
    onSuccess: () => reset(RESET_PARAMS),
    onError: message => showToast({message, type: 'error', position: 'bottom'}),
  });

  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onChange',
  });

  function submitForm({email}: ForgotPasswordSchema) {
    requestNewPassword(email);
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
        loading={isLoading}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        mt="s48"
        title="Recuperar senha"
      />
    </ScreenContainer>
  );
}
