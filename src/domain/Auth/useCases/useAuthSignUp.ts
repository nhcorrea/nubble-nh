import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {SignUpParams, authService} from '../index';

export function useAuthSignUp(options?: MutationOptions<void>) {
  const {mutate, isPending, isError} = useMutation<void, Error, SignUpParams>({
    mutationFn: signUpParams => authService.signUp(signUpParams),
    retry: false,
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  async function signUp(signUpParams: SignUpParams) {
    mutate(signUpParams);
  }

  return {
    isLoading: isPending,
    isError,
    signUp,
  };
}
