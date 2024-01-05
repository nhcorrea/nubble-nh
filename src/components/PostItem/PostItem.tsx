import React from 'react'

import {Post} from '@domain'

import {Box} from '@components'

import {PostActions} from './PostActions'
import {PostHeader} from './PostHeader'
import {PostImage} from './PostImage'

interface Props {
  post: Post
}

export function PostItem({post}: Props) {
  return (
    <Box gap="s16">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
    </Box>
  )
}
