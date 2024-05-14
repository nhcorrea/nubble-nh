import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../userService';

export function useUserGetById(id: number) {
  const {data, isLoading, refetch, isFetching, isError} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getUserById(id),
    staleTime: 1000 * 16,
    gcTime: 1000 * 20,
  });

  return {
    user: data,
    isLoading,
    isError,
    isFetching,
    refetch,
  };
}
