import React from 'react';
import {Pressable} from 'react-native';

import {Text} from '@components';

interface Props {
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export function PostCommentBottom({
  fetchNextPage,
  hasNextPage,
}: Props): React.JSX.Element | null {
  if (!hasNextPage) {
    return null;
  }

  return (
    <Pressable onPress={fetchNextPage}>
      <Text variant="paragraphMediumBold" textAlign="center" color="primary">
        Ver mais
      </Text>
    </Pressable>
  );
}
