import React from 'react';
import {Alert, Pressable} from 'react-native';

import {Box} from '#/components/Box/Box';
import {ProfileAvatar} from '#/components/ProfileAvatar/ProfileAvatar';
import {Text} from '#/components/Text/Text';
import {PostComment} from '#/domain/PostComment/postCommentTypes';
import {useIsAllowedToRemove} from '#/domain/PostComment/useCases/useIsAllowedToRemove';
import {usePostCommentRemove} from '#/domain/PostComment/useCases/usePostCommentRemove';
import {useToastService} from '#/services/toast/useToast';

interface Props {
  postId: number;
  postComment: PostComment;
  postAuthorId: number;
}

export function PostCommentItem({postId, postComment, postAuthorId}: Props) {
  const {
    author: {userName, profileURL},
    message,
    createAtRelative,
  } = postComment;

  const {showToast} = useToastService();
  const {removeComment} = usePostCommentRemove(postId, {onSuccess});

  function onSuccess() {
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
