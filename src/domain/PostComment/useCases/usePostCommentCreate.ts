import {MutationOptions, useMutation} from '@infra';

import {PostComment} from '..';
import {postCommentService} from '../postCommentService';

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const {mutate, isLoading, error} = useMutation<string, PostComment>(
    message => postCommentService.create(postId, message),
    options,
  );

  async function createComment(message: string) {
    await mutate(message);
  }

  return {
    createComment,
    isLoading,
    error,
  };
}
