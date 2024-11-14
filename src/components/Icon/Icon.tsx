import React from 'react';
import {Pressable} from 'react-native';

import {ArrowIcon} from '#/assets/icons/ArrowIcon';
import {BellIcon} from '#/assets/icons/BellIcon';
import {BellOnIcon} from '#/assets/icons/BellOnIcon';
import {BookmarkFillIcon} from '#/assets/icons/BookmarkFillIcon';
import {BookmarkIcon} from '#/assets/icons/BookmarkIcon';
import {CameraIcon} from '#/assets/icons/CameraIcon';
import {ChatIcon} from '#/assets/icons/ChatIcon';
import {CheckIcon} from '#/assets/icons/CheckIcon';
import {CheckRoundIcon} from '#/assets/icons/CheckRoundIcon';
import {ChevronRightIcon} from '#/assets/icons/ChevronRightIcon';
import {CloseIcon} from '#/assets/icons/CloseIcon';
import {CommentIcon} from '#/assets/icons/CommentIcon';
import {EyeOffIcon} from '#/assets/icons/EyeOffIcon';
import {EyeOnIcon} from '#/assets/icons/EyeOnIcon';
import {FlashOffIcon} from '#/assets/icons/FlashOffIcon';
import {FlashOnIcon} from '#/assets/icons/FlashOnIcon';
import {HeartFillIcon} from '#/assets/icons/HeartFillIcon';
import {HeartIcon} from '#/assets/icons/HeartIcon';
import {HomeFillIcon} from '#/assets/icons/HomeFillIcon';
import {HomeIcon} from '#/assets/icons/HomeIcon';
import {MessageIcon} from '#/assets/icons/MessageIcon';
import {MessageRoundIcon} from '#/assets/icons/MessageRoundIcon';
import {NewPostIcon} from '#/assets/icons/NewPostIcon';
import {ProfileFillIcon} from '#/assets/icons/ProfileFillIcon';
import {ProfileIcon} from '#/assets/icons/ProfileIcon';
import {SearchIcon} from '#/assets/icons/SearchIcon';
import {SettingsIcon} from '#/assets/icons/SettingsIcon';
import {TrashIcon} from '#/assets/icons/TrashIcon';
import {useAppTheme} from '#/hooks/useAppTheme';
import {ThemeType} from '#/theme';

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
  Close: CloseIcon,
};

type IconRegistryType = typeof IconRegistry;

export interface IconProps {
  name: keyof IconRegistryType;
  size?: string;
  color?: keyof ThemeType['colors'];
  widht?: string;
  height?: string;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  onPress,
  ...props
}: IconProps) {
  const SVGIcon = IconRegistry[name];
  const {colors} = useAppTheme();

  if (onPress) {
    return (
      <Pressable testID={name} onPress={onPress} hitSlop={12}>
        <SVGIcon color={colors[color]} {...props} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} {...props} />;
}
