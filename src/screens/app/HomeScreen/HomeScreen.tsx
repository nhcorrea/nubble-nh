import React from 'react';
import {FlatList, ListRenderItemInfo, ViewStyle} from 'react-native';

import {Post, usePostList} from '@domain';

import {ScreenContainer, PostItem, Box} from '@components';
import {AppTabScreensProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

function ItemSeparatorComponent(): JSX.Element {
  return <Box height={28} />;
}

function keyExtractor(item: Post, index: number): string {
  return `${item.id}-${index}`;
}

function renderItem({item}: ListRenderItemInfo<Post>): JSX.Element {
  return <PostItem post={item} />;
}

function handleContentContainerStyle(length: number): ViewStyle {
  return length === 0 ? {flex: 1} : {flex: undefined};
}

export function HomeScreen({}: AppTabScreensProps<'HomeScreen'>): JSX.Element {
  const {postList, ...rest} = usePostList();

  const contentContainerStyle = postList
    ? handleContentContainerStyle(postList.length)
    : undefined;

  return (
    <ScreenContainer style={screenStyle}>
      <FlatList
        contentContainerStyle={contentContainerStyle}
        data={postList}
        ItemSeparatorComponent={ItemSeparatorComponent}
        keyExtractor={keyExtractor}
        ListHeaderComponent={HomeHeader}
        ListEmptyComponent={<HomeEmpty {...rest} />}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </ScreenContainer>
  );
}

const screenStyle: ViewStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};
