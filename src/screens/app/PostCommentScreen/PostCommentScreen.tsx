import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, ScreenContainer} from '@components';
import {AppScreenProps} from '@routes';

import {PostCommentItem} from './components/PostCommentItem';

function ItemSeparatorComponent(): React.JSX.Element {
  return <Box height={8} />;
}

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const {postId} = route.params;
  const {error, isLoading, list, ...rest} = usePostCommentList(postId);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }
  return (
    <ScreenContainer title="Comentários" canGoBack>
      <FlatList
        data={list}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </ScreenContainer>
  );
}
