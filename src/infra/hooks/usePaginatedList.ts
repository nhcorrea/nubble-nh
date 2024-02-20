import {useEffect, useState} from 'react';

import {useInfiniteQuery} from '@tanstack/react-query';
import {Page} from '@types';

interface usePaginatedListResult<TData> {
  list: TData[];
  isLoading: boolean;
  isLoadingNextPage: boolean;
  isError: boolean | null;
  hasNextPage: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
}

type TQueryKey = readonly unknown[];

export function usePaginatedList<Data>(
  queryKey: TQueryKey,
  getList: (page: number) => Promise<Page<Data>>,
): usePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([]);

  const {
    data,
    fetchNextPage,
    refetch,
    isLoading,
    isError,
    isRefetching,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey,
    initialPageParam: 1,
    queryFn: ({pageParam}) => getList(pageParam),
    getNextPageParam: ({meta}) => {
      if (meta.hasNextPage) {
        return meta.currentPage + 1;
      }
      return undefined;
    },
  });

  useEffect(() => {
    if (data) {
      const newList = data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);

      setList(newList);
    }
  }, [data]);

  return {
    list,
    isLoading,
    isError,
    hasNextPage,
    refresh: refetch,
    fetchNextPage,
    isLoadingNextPage: isRefetching,
  };
}
