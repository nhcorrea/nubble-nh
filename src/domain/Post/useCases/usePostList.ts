import {useEffect, useState} from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean | null>();
  const [postList, setPostList] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  async function fetchInitialData() {
    try {
      setError(null);
      setIsLoading(true);
      const {data, meta} = await postService.getList(1);
      setPostList(data);

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
    if (isLoading || !hasNextPage) {
      return;
    }

    try {
      setError(null);
      setIsLoading(true);
      const {data, meta} = await postService.getList(page);
      setPostList(prev => [...prev, ...data]);

      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
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

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    postList,
    isLoading,
    error,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
