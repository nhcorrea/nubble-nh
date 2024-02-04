import React from 'react';

import {Post} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  return (
    <Box flexDirection="row" alignItems="center" gap="s12">
      <ProfileAvatar imageURL={author.profileURL} />
      <Text variant="paragraphMedium">{author.userName}</Text>
    </Box>
  );
}
