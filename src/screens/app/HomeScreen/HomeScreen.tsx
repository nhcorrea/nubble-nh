import React, {useEffect, useState} from 'react'
import {FlatList, ListRenderItemInfo} from 'react-native'

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

  function keyExtractor(item: Post) {
    return item.id
  }

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <ScreenContainer>
      <FlatList
        data={postList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </ScreenContainer>
  )
}
