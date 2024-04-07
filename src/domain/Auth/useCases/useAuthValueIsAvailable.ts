import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authService} from '../authService';

interface Props {
  username: string;
  enabled: boolean;
}

export function useAuthIsUsernameAvailable({username, enabled}: Props) {
  const debouncedUsername = useDebounce({value: username, delay: 1500});

  const {data, isFetching, isError} = useQuery({
    queryKey: [QueryKeys.IsUsernameAvailable, debouncedUsername],
    queryFn: () => authService.isUsernameAvailable(debouncedUsername),
    retry: false,
    staleTime: 10000,
    enabled: enabled && debouncedUsername.length > 0,
  });

  const isDebouncing = debouncedUsername !== username;

  return {
    isAvailable: !!data,
    isFetching: isFetching || isDebouncing,
    isError,
  };
}
