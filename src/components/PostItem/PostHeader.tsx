import React from 'react';
import {Pressable} from 'react-native';

import {Post} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';
import {useAppNavigation} from '@hooks';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  const navigation = useAppNavigation();
  function onPress() {
    navigation.navigate('BottomTabStack', {
      screen: 'MyProfileScreen',
      params: {userId: author.id},
    });
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
