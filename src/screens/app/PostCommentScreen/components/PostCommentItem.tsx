import React from 'react';

import {PostComment} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postComment: PostComment;
}

export function PostCommentItem({postComment}: Props): React.JSX.Element {
  const {
    author: {userName, profileURL},
    message,
    // createdAt,
  } = postComment;
  return (
    <Box flexDirection="row" gap="s12" alignItems="center">
      <ProfileAvatar imageURL={profileURL} />
      <Box>
        <Text variant="paragraphSmallBold" color="grayBlack">
          {userName}
        </Text>
        <Text variant="paragraphSmallMedium" color="gray1">
          {message}
        </Text>
        {/* <Text>{createdAt}</Text> */}
      </Box>
    </Box>
  );
}
