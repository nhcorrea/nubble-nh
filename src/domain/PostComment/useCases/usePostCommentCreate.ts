import {useState} from 'react';

import {postCommentService} from '../postCommentService';

export function usePostCommentCreate(postId: number) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setIsLoading(true);
      await postCommentService.create(postId, message);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    createComment,
    isLoading,
    error,
  };
}
