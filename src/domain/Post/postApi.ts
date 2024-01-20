import {api, PageAPI} from '@api';

import {PostAPI} from './postTypes';

export async function getList(): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>('/user/post');

  await new Promise(resolve => setTimeout(resolve, 2000));

  const result: PageAPI<PostAPI> = response.data;
  return result;
}

export const postApi = {
  getList,
};
