import React from 'react';
import {TouchableOpacity} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {LoginSchema, loginSchema} from './loginSchema';

import {Box} from '#/components/Box/Box';
import {Button} from '#/components/Button/Button';
import {FormPasswordInput} from '#/components/Form/FormPasswordInput';
import {FormTextInput} from '#/components/Form/FormTextInput';
import {ScreenContainer} from '#/components/ScreenContainer/ScreenContainer';
import {Text} from '#/components/Text/Text';
import {useAuthSignIn} from '#/domain/Auth/useCases/useAuthSignIn';
import {AuthScreenProps} from '#/routes/routesTypes';
import {useToastService} from '#/services/toast/useToast';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  function navigateToSignUp() {
    navigation.navigate('SignUpScreen');
  }
  function navigateToForgotPassword() {
    navigation.navigate('ForgotPassword');
  }

  const {showToast} = useToastService();
  function submitForm({email, password}: LoginSchema) {
    signIn({email, password});
  }

  const {isLoading, signIn} = useAuthSignIn({
    onError: message => {
      showToast({message, type: 'error', position: 'bottom'});
    },
  });

  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

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
          loading={isLoading}
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
  );
}
