import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authService} from '../authService';

interface Props<T extends {length: number}> {
  value: T;
  enabled: boolean;
  queryKey: QueryKeys;
  isAvailableFn: (value: T) => Promise<boolean>;
}

interface UseIsUsernameAvailable {
  username: string;
  enabled: boolean;
}

interface UseIsEmailAvailable {
  email: string;
  enabled: boolean;
}

export function useAuthIsValueAvailable<T extends {length: number}>({
  value,
  enabled,
  queryKey,
  isAvailableFn,
}: Props<T>) {
  const debouncedValue = useDebounce({value, delay: 1500});

  const {data, isFetching} = useQuery({
    queryKey: [queryKey, debouncedValue],
    queryFn: () => isAvailableFn(debouncedValue),
    retry: false,
    staleTime: 10000,
    enabled: enabled && debouncedValue.length > 0,
  });

  const isDebouncing = debouncedValue !== value;

  return {
    isUnavailable: data === false,
    isFetching: isFetching || isDebouncing,
  };
}

export function useAuthIsUsernameAvailable({
  username,
  enabled,
}: UseIsUsernameAvailable) {
  return useAuthIsValueAvailable({
    value: username,
    isAvailableFn: authService.isUsernameAvailable,
    queryKey: QueryKeys.IsUsernameAvailable,
    enabled,
  });
}

export function useAuthIsEmailAvailable({email, enabled}: UseIsEmailAvailable) {
  return useAuthIsValueAvailable({
    value: email,
    isAvailableFn: authService.isEmailAvailable,
    queryKey: QueryKeys.IsEmailAvailable,
    enabled,
  });
}
