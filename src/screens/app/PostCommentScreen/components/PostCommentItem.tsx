import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, useIsAllowedToRemove, usePostCommentRemove} from '@domain';
import {useToastService} from '@services';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postComment: PostComment;
  postAuthorId: number;
  onRemoveComment: () => void;
}

export function PostCommentItem({
  postComment,
  onRemoveComment,
  postAuthorId,
}: Props): React.JSX.Element {
  const {
    author: {userName, profileURL},
    message,
    createAtRelative,
  } = postComment;

  const {showToast} = useToastService();
  const {removeComment} = usePostCommentRemove({onSuccess});

  function onSuccess() {
    onRemoveComment();
    showToast({
      duration: 4000,
      message: 'Comentário removido',
      type: 'success',
      position: 'bottom',
    });
  }

  const {isAllowedToRemove} = useIsAllowedToRemove(
    postComment,
    postAuthorId,
    1,
  );

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
    <Pressable
      onLongPress={isAllowedToRemove ? confirmRemoveComment : undefined}>
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
