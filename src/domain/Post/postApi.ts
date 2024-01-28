import {api, PageAPI, PageParams} from '@api';

import {PostAPI} from './postTypes';

export async function getList(params: PageParams): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>('/user/post', {
    params,
  });

  const result: PageAPI<PostAPI> = response.data;
  return result;
}

export const postApi = {
  getList,
};
