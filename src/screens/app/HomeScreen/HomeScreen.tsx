import React, {useRef} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  ViewStyle,
} from 'react-native';

import {Post, usePostList} from '@domain';
import {useScrollToTop} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {ScreenContainer, PostItem, Box} from '@components';
import {useAppTheme} from '@hooks';
import {AppTabScreensProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

function ItemSeparatorComponent(): React.JSX.Element {
  return <Box height={28} />;
}

function keyExtractor(item: Post, index: number): string {
  return `${item.id}-${index}`;
}

function renderItem({item}: ListRenderItemInfo<Post>): React.JSX.Element {
  return <PostItem post={item} />;
}

function handleContentContainerStyle(length: number): ViewStyle {
  return length === 0 ? {flex: 1} : {flex: undefined};
}

function ListFooterComponent(isLoading: boolean): React.JSX.Element | null {
  if (isLoading) {
    return (
      <Box p="s16">
        <ActivityIndicator color={Colors.primary} size="small" />
      </Box>
    );
  }
  return null;
}

export function HomeScreen({}: AppTabScreensProps<'HomeScreen'>): React.JSX.Element {
  const {list, fetchNextPage, ...rest} = usePostList();
  const {colors} = useAppTheme();
  const flatListReft = useRef<FlatList>(null);

  useScrollToTop(flatListReft);

  return (
    <ScreenContainer style={screenStyle}>
      <FlatList
        ref={flatListReft}
        contentContainerStyle={handleContentContainerStyle(list.length)}
        data={list}
        ItemSeparatorComponent={ItemSeparatorComponent}
        keyExtractor={keyExtractor}
        ListHeaderComponent={HomeHeader}
        ListEmptyComponent={<HomeEmpty {...rest} />}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={rest.isLoading}
            onRefresh={rest.refresh}
            tintColor={colors.primary}
          />
        }
        refreshing={rest.isLoading}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        ListFooterComponent={ListFooterComponent(rest.isLoadingNextPage)}
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
