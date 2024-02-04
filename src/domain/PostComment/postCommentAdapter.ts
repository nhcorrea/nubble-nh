import {dateUtils} from '@utils';

import {PostComment, PostCommentAPI} from './postCommentTypes';

function toPostComment(postCommentApi: PostCommentAPI): PostComment {
  const {formatRelative} = dateUtils;
  return {
    id: postCommentApi.id,
    message: postCommentApi.message,
    createdAt: postCommentApi.created_at,
    createAtRelative: formatRelative(postCommentApi.created_at),
    author: {
      id: postCommentApi.user.id,
      name: postCommentApi.user.full_name,
      profileURL: postCommentApi.user.profile_url,
      userName: postCommentApi.user.username,
    },
  };
}

export const postCommentAdapter = {
  toPostComment,
};
