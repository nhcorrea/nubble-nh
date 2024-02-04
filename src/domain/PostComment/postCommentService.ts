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

export const postCommentService = {
  getList,
  create,
};
