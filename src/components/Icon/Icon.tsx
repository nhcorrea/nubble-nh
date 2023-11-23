import React from 'react'
import {Pressable} from 'react-native'

import {
  ArrowIcon,
  BellOnIcon,
  BellIcon,
  BookmarkFillIcon,
  BookmarkIcon,
  CameraIcon,
  ChatIcon,
  CheckIcon,
  ChevronRightIcon,
  CommentIcon,
  EyeOffIcon,
  EyeOnIcon,
  FlashOffIcon,
  FlashOnIcon,
  HeartFillIcon,
  HeartIcon,
  HomeFillIcon,
  HomeIcon,
  NewPostIcon,
  MessageIcon,
  ProfileFillIcon,
  ProfileIcon,
  SearchIcon,
  SettingsIcon,
  TrashIcon,
  CheckRoundIcon,
  MessageRoundIcon,
} from '@icons'

import {useAppTheme} from '@hooks'
import {ThemeType} from '@theme'

const IconRegistry = {
  Arrow: ArrowIcon,
  Bell: BellIcon,
  BellOn: BellOnIcon,
  BookmarkFill: BookmarkFillIcon,
  Bookmark: BookmarkIcon,
  Camera: CameraIcon,
  Chat: ChatIcon,
  Check: CheckIcon,
  ChevronRight: ChevronRightIcon,
  CheckRound: CheckRoundIcon,
  Comment: CommentIcon,
  EyeOff: EyeOffIcon,
  EyeOn: EyeOnIcon,
  FlashOff: FlashOffIcon,
  FlashOn: FlashOnIcon,
  HeartFill: HeartFillIcon,
  Heart: HeartIcon,
  HomeFill: HomeFillIcon,
  Home: HomeIcon,
  Message: MessageIcon,
  MessageRound: MessageRoundIcon,
  NewPost: NewPostIcon,
  ProfileFill: ProfileFillIcon,
  Profile: ProfileIcon,
  Search: SearchIcon,
  Settings: SettingsIcon,
  Trash: TrashIcon,
}

type IconRegistryType = typeof IconRegistry

export interface IconProps {
  name: keyof IconRegistryType
  size?: string
  color?: keyof ThemeType['colors']
  widht?: string
  height?: string
  onPress?: () => void
}

export function Icon({
  name,
  color = 'backgroundContrast',
  onPress,
  ...props
}: IconProps) {
  const SVGIcon = IconRegistry[name]
  const {colors} = useAppTheme()

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={12}>
        <SVGIcon color={colors[color]} {...props} />
      </Pressable>
    )
  }

  return <SVGIcon color={colors[color]} {...props} />
}
