import {useState} from 'react';

import {PostComment} from '..';
import {postCommentService} from '../postCommentService';

interface Options {
  onSuccess?: (data: PostComment) => void;
}

export function usePostCommentCreate(postId: number, options?: Options) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setIsLoading(true);
      const postComment = await postCommentService.create(postId, message);
      if (options?.onSuccess) {
        options.onSuccess(postComment);
      }
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
