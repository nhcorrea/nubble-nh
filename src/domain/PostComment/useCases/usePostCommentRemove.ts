import {MutationOptions, QueryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postCommentService} from '../postCommentService';

export function usePostCommentRemove(
  postId: number,
  options?: MutationOptions<string>,
) {
  const queryClient = useQueryClient();

  const {mutate, isPending, isError} = useMutation<
    string,
    unknown,
    {postCommentId: number}
  >({
    mutationFn: ({postCommentId}) => postCommentService.remove(postCommentId),
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
        options?.onError?.(
          options?.errorMessage || 'Erro ao remover comentário',
        );
      }
    },
  });

  function removeComment(postCommentId: number) {
    mutate({postCommentId});
  }

  return {
    removeComment,
    isLoading: isPending,
    isError,
  };
}
