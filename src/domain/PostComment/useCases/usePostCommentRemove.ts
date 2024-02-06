import {MutationOptions, useMutation} from '@infra';

import {postCommentService} from '../postCommentService';

export function usePostCommentRemove(options?: MutationOptions<string>) {
  const {mutate, error, isLoading} = useMutation<
    {postCommentId: number},
    string
  >(({postCommentId}) => postCommentService.remove(postCommentId), options);

  async function removeComment(postCommentId: number) {
    await mutate({postCommentId});
  }

  return {
    removeComment,
    isLoading,
    error,
  };
}
