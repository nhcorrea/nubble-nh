import {useEffect, useState} from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<boolean | null>();
  const [postList, setPostList] = useState<Post[]>();

  async function fetchPostList() {
    setIsLoading(true);
    const list = await postService.getList();
    setPostList(list);

    try {
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPostList();
  }, []);

  return {
    postList,
    isLoading,
    error,
    refetch: fetchPostList,
  };
}
