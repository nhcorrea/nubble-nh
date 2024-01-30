import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentApi} from './postCommentApi';
import {PostComment} from './postCommentTypes';

const PER_PAGE = 10;

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

export const postCommentService = {
  getList,
};
