import {useEffect, useState} from 'react';

import {Page} from '@types';

export function usePaginatedList<Data>(
  getList: (page: number) => Promise<Page<Data>>,
) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>();
  const [list, setList] = useState<Data[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  async function fetchInitialData() {
    try {
      setError(null);
      setIsLoading(true);
      const {data, meta} = await getList(1);
      setList(data);

      if (meta.hasNextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchNextPage() {
    if (isLoadingNextPage || isLoading || !hasNextPage) {
      return;
    }

    try {
      setError(null);
      setIsLoadingNextPage(true);
      const {data, meta} = await getList(page);
      setList(prev => [...prev, ...data]);

      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsLoadingNextPage(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    list,
    isLoading,
    isLoadingNextPage,
    error,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
