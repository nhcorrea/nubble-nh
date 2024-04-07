import React from 'react';
import {ActivityIndicator} from 'react-native';

import {useAuthIsUsernameAvailable, useAuthSignUp} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Box,
  Button,
  Text,
  ScreenContainer,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {useResetNavigation} from '@hooks';
import {AuthStackParamList} from '@routes';

import {SignUpSchema, signUpSchema} from './signUpSchema';

const RESET_PARAMS: AuthStackParamList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {
    name: 'CheckRound',
    color: 'success',
  },
};

const DEFAULT_VALUES: SignUpSchema = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
};

export function SignUpScreen() {
  const {reset} = useResetNavigation();
  const {signUp, isLoading} = useAuthSignUp({
    onSuccess: () => {
      reset(RESET_PARAMS);
    },
  });

  async function submitForm(formData: SignUpSchema) {
    await signUp(formData);
  }
  const {control, handleSubmit, watch, getFieldState, formState} =
    useForm<SignUpSchema>({
      defaultValues: DEFAULT_VALUES,
      resolver: zodResolver(signUpSchema),
      mode: 'onChange',
    });

  const username = watch('username');
  const usernameState = getFieldState('username');

  const usernameCanSubmit = usernameState.isDirty && !usernameState.invalid;

  const usernameQuery = useAuthIsUsernameAvailable({
    username,
    enabled: usernameCanSubmit,
  });

  const disableSubmit =
    !formState.isValid || usernameQuery.isFetching || usernameState.invalid;

  return (
    <ScreenContainer scrollEnabled canGoBack>
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
            RightComponent={
              usernameQuery.isFetching ? (
                <ActivityIndicator size="small" />
              ) : undefined
            }
          />

          <FormTextInput
            control={control}
            name="firstName"
            autoCapitalize="words"
            placeholder="Digite seu nome"
            label="Nome"
          />

          <FormTextInput
            control={control}
            name="lastName"
            autoCapitalize="words"
            placeholder="Digite seu sobrenome"
            label="Sobrenome"
          />

          <FormTextInput
            control={control}
            name="email"
            placeholder="Digite seu e-mail"
            label="E-mail"
            keyboardType="email-address"
          />

          <FormPasswordInput
            control={control}
            name="password"
            placeholder="Digite sua senha"
            label="Senha"
          />
        </Box>
        <Button
          mt="s16"
          title="Criar uma conta"
          onPress={handleSubmit(submitForm)}
          loading={isLoading}
          disabled={disableSubmit}
        />
      </Box>
    </ScreenContainer>
  );
}
