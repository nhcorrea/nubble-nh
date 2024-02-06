import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentApi} from './postCommentApi';
import {PostComment} from './postCommentTypes';

const PER_PAGE = 5;

async function getList(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentList = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  const data = postCommentList.data.map(postCommentAdapter.toPostComment);

  return {
    data,
    meta: apiAdapter.toMetaDataPage(postCommentList.meta),
  };
}

async function create(postId: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.create(postId, message);

  return postCommentAdapter.toPostComment(postCommentAPI);
}

async function remove(postCommentId: number): Promise<string> {
  console.log('REMOVE SERVICE');
  const response = await postCommentApi.remove(postCommentId);
  return response.message;
}
/**
 *
 * @default user can delete the comment if is the author or comment creator
 *
 * @params userId to be compared
 * @params postAuthorId to be compared
 * @params postComment to be removed
 */

function isAllowedToRemove(
  postComment: PostComment,
  postAuthorId: number,
  userId: number,
): boolean {
  if (postComment.author.id === userId) {
    return true;
  }
  if (postAuthorId === userId) {
    return true;
  }

  return false;
}

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowedToRemove,
};
