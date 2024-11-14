import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostCommentBottom} from './components/PostCommentBottom';
import {PostCommentItem} from './components/PostCommentItem';
import {PostCommentTextMessage} from './components/PostCommentTextMessage';

import {Box} from '#/components/Box/Box';
import {ScreenContainer} from '#/components/ScreenContainer/ScreenContainer';
import {PostComment} from '#/domain/PostComment/postCommentTypes';
import {usePostCommentList} from '#/domain/PostComment/useCases/usePostCommentList';
import {useAppSafeArea} from '#/hooks/useAppSafeArea';
import {useAppTheme} from '#/hooks/useAppTheme';
import {AppScreenProps} from '#/routes/routesTypes';

interface RenderItemProps
  extends Omit<ListRenderItemInfo<PostComment>, 'index' | 'separators'> {
  postId: number;
  postAuthorId: number;
}

function ItemSeparatorComponent() {
  return <Box height={8} />;
}

function renderItem({item, ...props}: RenderItemProps) {
  return <PostCommentItem postComment={item} {...props} />;
}

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const {postId, postAuthorId} = route.params;
  const {bottom} = useAppSafeArea();
  const {spacing} = useAppTheme();
  const {list, hasNextPage, fetchNextPage} = usePostCommentList(postId);

  return (
    <ScreenContainer title="Comentários" canGoBack>
      <FlatList
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={({item}) => renderItem({item, postId, postAuthorId})}
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
