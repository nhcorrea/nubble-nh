import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'commentCount' | 'text'>;

export function PostBottom({author: {userName}, commentCount, text}: Props) {
  const commentText = getCommentText(commentCount);
  return (
    <Box>
      <Text variant="paragraphMediumBold" color="grayBlack">
        {userName}
      </Text>
      <Text variant="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text marginTop="s8" color="primary" variant="paragraphMediumBold">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number) {
  if (commentCount === 0) {
    return null;
  }
  if (commentCount === 1) {
    return 'ver comentário';
  }
  if (commentCount >= 2) {
    return `ver ${commentCount} comentários`;
  }

  return null;
}
