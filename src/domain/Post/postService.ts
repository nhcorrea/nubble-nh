import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

import {apiAdapter} from '#/api/apiAdapter';
import {Page} from '#/types/Pages';

async function getList(page: number): Promise<Page<Post>> {
  const postList = await postApi.getList({page, per_page: 10});
  const data = postList.data.map(postAdapter.toPost);

  return {
    data,
    meta: apiAdapter.toMetaDataPage(postList.meta),
  };
}

export const postService = {
  getList,
};
