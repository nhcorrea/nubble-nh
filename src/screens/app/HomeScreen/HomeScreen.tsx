import React, {useEffect, useState} from 'react'
import {FlatList, ListRenderItemInfo, ViewStyle} from 'react-native'

import {postService} from '@domain'
import {Post} from 'src/domain/Post/types'

import {ScreenContainer, PostItem, Box} from '@components'
import {AppTabScreensProps} from '@routes'

function ItemSeparatorComponent() {
  return <Box height={28} />
}

export function HomeScreen({}: AppTabScreensProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>()

  useEffect(() => {
    postService.getList().then(list => setPostList(list))
  }, [])

  function keyExtractor(item: Post, index: number) {
    return `${item.id}-${index}`
  }

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <ScreenContainer style={screenStyle}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </ScreenContainer>
  )
}

const screenStyle: ViewStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
}
