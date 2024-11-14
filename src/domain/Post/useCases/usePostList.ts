import {postService} from '../postService';
import {Post} from '../postTypes';

import {usePaginatedList} from '#/infra/hooks/usePaginatedList';
import {QueryKeys} from '#/infra/infraTypes';

export function usePostList() {
  return usePaginatedList<Post>([QueryKeys.PostList], postService.getList);
}
