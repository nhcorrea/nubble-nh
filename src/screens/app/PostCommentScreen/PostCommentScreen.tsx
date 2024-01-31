import React from 'react';

import {Box, ScreenContainer, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({}: AppScreenProps<'PostCommentScreen'>) {
  return (
    <ScreenContainer title="Comentários" canGoBack>
      <Box>
        <Text variant="headingSmall">Tela de comentários</Text>
      </Box>
    </ScreenContainer>
  );
}
