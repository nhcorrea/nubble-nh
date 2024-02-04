import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, ScreenContainer} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';
import {AppScreenProps} from '@routes';

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './components';

function ItemSeparatorComponent(): React.JSX.Element {
  return <Box height={8} />;
}

function renderItem({
  item,
}: ListRenderItemInfo<PostComment>): React.JSX.Element {
  return <PostCommentItem postComment={item} />;
}

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>): React.JSX.Element {
  const {postId} = route.params;
  const {bottom} = useAppSafeArea();
  const {spacing} = useAppTheme();
  const {list, hasNextPage, fetchNextPage} = usePostCommentList(postId);

  return (
    <ScreenContainer title="Comentários" canGoBack>
      <FlatList
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: bottom, paddingTop: spacing.s24}}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={
          <PostCommentBottom
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
        }
      />
      <PostCommentTextMessage postId={postId} />
    </ScreenContainer>
  );
}
