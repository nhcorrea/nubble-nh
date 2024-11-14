import React from 'react';
import {Pressable} from 'react-native';

import {Box} from '../Box/Box';
import {ProfileAvatar} from '../ProfileAvatar/ProfileAvatar';
import {Text} from '../Text/Text';

import {Post} from '#/domain/Post/postTypes';
import {useAppNavigation} from '#/hooks/useAppNavigation';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  const navigation = useAppNavigation();
  function onPress() {
    navigation.navigate('ProfileScreen', {userId: author.id});
  }

  return (
    <Pressable onPress={onPress}>
      <Box flexDirection="row" alignItems="center" gap="s12">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text variant="paragraphMedium">{author.userName}</Text>
      </Box>
    </Pressable>
  );
}
