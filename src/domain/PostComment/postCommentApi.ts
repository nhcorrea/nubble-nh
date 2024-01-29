import {api, PageAPI, PageParams} from '@api';

import {PostCommentAPI} from './postCommentTypes';

export async function getList(
  postId: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  const response = await api.get<PageAPI<PostCommentAPI>>(
    '/user/post_comment',
    {
      params: {
        ...pageParams,
        post_id: postId,
      },
    },
  );

  return response.data;
}

export const postCommentApi = {
  getList,
};
