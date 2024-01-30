/**
 * @description
 * Adapt PostAPI to the Post model
 */

import {Post, PostAPI} from './postTypes';

function toPost(postApi: PostAPI): Post {
  return {
    id: postApi.id,
    text: postApi.text,
    author: {
      name: postApi.user.full_name,
      userName: postApi.user.username,
      profileURL: postApi.user.profile_url,
    },
    imageURL: postApi.image_url,
    commentCount: Number(postApi.meta.comments_count),
    favoriteCount: Number(postApi.meta.favorite_count),
    reactionCount: Number(postApi.meta.like_count),
  };
}

export const postAdapter = {
  toPost,
};
