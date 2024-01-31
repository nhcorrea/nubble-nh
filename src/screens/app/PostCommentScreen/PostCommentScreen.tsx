import React from 'react';

import {usePostCommentList} from '@domain';

import {Box, ScreenContainer, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const {postId} = route.params;
  const {error, isLoading, list, ...rest} = usePostCommentList(postId);

  console.log(list);
  return (
    <ScreenContainer title="Comentários" canGoBack>
      <Box>
        <Text variant="headingSmall">{list[0]?.message}</Text>
      </Box>
    </ScreenContainer>
  );
}
