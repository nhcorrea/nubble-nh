import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, usePostCommentRemove} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postComment: PostComment;
  onRemoveComment: () => void;
}

export function PostCommentItem({
  postComment,
  onRemoveComment,
}: Props): React.JSX.Element {
  const {
    author: {userName, profileURL},
    message,
    createAtRelative,
  } = postComment;

  const {removeComment} = usePostCommentRemove({onSuccess: onRemoveComment});
  // const {} = useIsAllowedToRemove(postComment, )

  function confirmRemoveComment() {
    Alert.alert('Deseja remover o comentário ?', 'Pressione confirmar', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Confirmar',
        onPress: () => removeComment(postComment.id),
      },
    ]);
  }

  return (
    <Pressable onLongPress={confirmRemoveComment}>
      <Box flexDirection="row" gap="s12" alignItems="center">
        <ProfileAvatar imageURL={profileURL} />
        <Box flex={1}>
          <Text variant="paragraphSmallBold" color="grayBlack">
            {userName}
          </Text>
          <Text variant="paragraphSmallMedium" color="gray1">
            {message} - {createAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
