import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommentTypes';

export function useIsAllowedToRemove(
  postComment: PostComment,
  postAuthorId: number,
  userId: number,
) {
  const isAllowedToRemove = postCommentService.isAllowedToRemove(
    postComment,
    postAuthorId,
    userId,
  );
  return {
    isAllowedToRemove,
  };
}
