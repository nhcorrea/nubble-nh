import {PostComment} from '..';
import {postCommentService} from '../postCommentService';

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
