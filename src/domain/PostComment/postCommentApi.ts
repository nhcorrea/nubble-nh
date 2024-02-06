import {api, PageAPI, PageParams} from '@api';

import {PostCommentAPI} from './postCommentTypes';

const PATH = '/user/post_comment';

export async function getList(
  postId: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  const response = await api.get<PageAPI<PostCommentAPI>>(PATH, {
    params: {
      ...pageParams,
      post_id: postId,
    },
  });

  return response.data;
}

export async function create(
  postId: number,
  message: string,
): Promise<PostCommentAPI> {
  const response = await api.post<PostCommentAPI>(PATH, {
    post_id: postId,
    message,
  });

  return response.data;
}

async function remove(postCommentId: number): Promise<{message: string}> {
  console.log(PATH + '/' + postCommentId);
  const response = await api.delete<{message: string}>(
    `${PATH}/${postCommentId}`,
  );

  console.log(response);

  return response.data;
}

export const postCommentApi = {
  getList,
  create,
  remove,
};
