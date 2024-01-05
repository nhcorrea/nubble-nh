import React from 'react'

import {Post} from '@domain'

import {Box, TouchableOpacityBox, Text, Icon, IconProps} from '@components'

interface PostIconProps {
  iconName: {
    default: IconProps['name']
    marked: IconProps['name']
  }
  isMarked?: boolean
  color?: IconProps['color']
  counter: number
  onPress: () => void
}

function PostIcon({
  counter,
  onPress,
  iconName,
  color,
  isMarked,
}: PostIconProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
      gap="s4">
      <Icon
        size="20"
        name={isMarked ? iconName.marked : iconName.default}
        color={isMarked ? color : undefined}
      />
      <Text variant="paragraphSmallBold" color="grayBlack">
        {counter}
      </Text>
    </TouchableOpacityBox>
  )
}

type PostActionsProps = Pick<
  Post,
  'reactionCount' | 'commentCount' | 'favoriteCount'
>

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: PostActionsProps) {
  return (
    <Box flexDirection="row" gap="s24">
      <PostIcon
        iconName={{default: 'Heart', marked: 'HeartFill'}}
        counter={reactionCount}
        onPress={() => {}}
        color="marked"
        isMarked
      />
      <PostIcon
        iconName={{default: 'Comment', marked: 'Comment'}}
        counter={commentCount}
        onPress={() => {}}
      />
      <PostIcon
        iconName={{default: 'Bookmark', marked: 'BookmarkFill'}}
        counter={favoriteCount}
        onPress={() => {}}
      />
    </Box>
  )
}
