import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
  const postList = await postApi.getList();
  const result = postList.data.map(postAdapter.toPost);

  return result;
}

export const postService = {
  getList,
};
