import {UseFormGetFieldState, UseFormWatch} from 'react-hook-form';

import {SignUpSchema} from './signUpSchema';

interface CallbackParams {
  username: string;
  email: string;
  enabled: boolean;
}

interface CallbackReturn {
  isUnavailable: boolean;
  isFetching: boolean;
}

interface Props {
  watch: UseFormWatch<SignUpSchema>;
  getFieldState: UseFormGetFieldState<SignUpSchema>;
  value: keyof Pick<SignUpSchema, 'username' | 'email'>;
  callbackFn: (params: CallbackParams) => CallbackReturn;
}

interface ReturnValues {
  errorMessage?: string;
  disableSubmit: boolean;
  isUnavailable: boolean;
  isFetching: boolean;
}

export function useAsyncValidation({
  watch,
  getFieldState,
  value,
  callbackFn,
}: Props): ReturnValues {
  const watchValue = watch(value);
  const valueState = getFieldState(value);
  const valueCantSubmit = valueState.isDirty && !valueState.invalid;

  const {isFetching, isUnavailable} = callbackFn({
    username: value === 'username' ? watchValue : '',
    email: value === 'email' ? watchValue : '',
    enabled: valueCantSubmit,
  });

  const disableSubmit = isFetching || isUnavailable || valueState.invalid;

  const errorMessages = {
    username: 'Username já está em uso.',
    email: 'E-mail já está em uso.',
  };

  const errorMessage = isUnavailable ? errorMessages[value] : undefined;

  return {
    errorMessage,
    disableSubmit,
    isUnavailable,
    isFetching,
  };
}
