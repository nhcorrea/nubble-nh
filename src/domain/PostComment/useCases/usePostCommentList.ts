import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommentTypes';

import {usePaginatedList} from '#/infra/hooks/usePaginatedList';
import {QueryKeys} from '#/infra/infraTypes';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }

  return usePaginatedList<PostComment>(
    [QueryKeys.PostCommentList, postId],
    getList,
  );
}
