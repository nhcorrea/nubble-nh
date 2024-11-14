import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';

import {useAuthCredentials} from '#/services/auth/useAuthCredentials';

export function useAuthSignOut() {
  const {removeAuthCredentials} = useAuthCredentials();

  const {mutate, isPending} = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSuccess: () => {
      removeAuthCredentials();
    },
  });

  return {
    isLoading: isPending,
    signOut: () => mutate(),
  };
}
