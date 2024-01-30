import React from 'react';
import {Image, ImageStyle} from 'react-native';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  return (
    <Box flexDirection="row" alignItems="center" gap="s12">
      <Image style={avatarStyles} source={{uri: author.profileURL}} />
      <Text variant="paragraphMedium">{author.userName}</Text>
    </Box>
  );
}

const avatarStyles: ImageStyle = {
  width: 32,
  height: 32,
  borderRadius: 14,
};
