import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

import {Post} from '#/domain/Post/postTypes';
import {AppStackParamList} from '#/routes/routesTypes';

type Props = Pick<Post, 'author' | 'commentCount' | 'text' | 'id'>;

export function PostBottom({
  author: {userName},
  commentCount,
  text,
  id,
}: Props) {
  const commentText = getCommentText(commentCount);
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  function navigateToPostCommentScreen() {
    navigation.navigate('PostCommentScreen', {
      postId: id,
      postAuthorId: id,
    });
  }

  return (
    <Box>
      <Text variant="paragraphMediumBold" color="grayBlack">
        {userName}
      </Text>
      <Text variant="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text
          onPress={navigateToPostCommentScreen}
          marginTop="s8"
          color="primary"
          variant="paragraphMediumBold">
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
