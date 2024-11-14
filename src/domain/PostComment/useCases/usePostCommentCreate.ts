import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommentTypes';

import {MutationOptions} from '#/infra/hooks/useMutation';
import {QueryKeys} from '#/infra/infraTypes';

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const queryClient = useQueryClient();

  const {mutate, isPending, isError} = useMutation<
    PostComment,
    unknown,
    {message: string}
  >({
    mutationFn: ({message}) => postCommentService.create(postId, message),
    onSettled: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });
      if (data) {
        options?.onSuccess?.(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options?.onError?.(options?.errorMessage || 'Erro ao criar comentário');
      }
    },
  });

  function createComment(message: string) {
    mutate({message});
  }

  return {
    createComment,
    isLoading: isPending,
    isError,
  };
}
