import React from 'react';

import {Post} from '@domain';

import {Box} from '@components';

import {PostActions} from './PostActions';
import {PostBottom} from './PostBottom';
import {PostHeader} from './PostHeader';
import {PostImage} from './PostImage';

interface Props {
  post: Post;
}

export function PostItem({post}: Props) {
  return (
    <Box paddingHorizontal="s24" gap="s16">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
      <PostBottom
        author={post.author}
        commentCount={post.commentCount}
        text={post.text}
        id={post.id}
      />
    </Box>
  );
}
