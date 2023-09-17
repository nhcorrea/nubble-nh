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
} from '../../assets/icons'
import { ThemeType } from '../../theme'
import { useAppTheme } from '../../hooks/useAppTheme'

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
  NewPost: NewPostIcon,
  ProfileFill: ProfileFillIcon,
  Profile: ProfileIcon,
  Search: SearchIcon,
  Settings: SettingsIcon,
  Trash: TrashIcon,
}

type IconRegistryType = typeof IconRegistry

interface IconProps {
  name: keyof IconRegistryType
  size?: string
  color?: keyof ThemeType['colors']
  widht?: string
  height?: string
}

export function Icon({
  name,
  color = 'backgroundContrast',
  ...props
}: IconProps) {
  const SVGIcon = IconRegistry[name]
  const { colors } = useAppTheme()

  return <SVGIcon color={colors[color]} {...props} />
}
