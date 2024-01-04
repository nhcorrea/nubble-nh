import {IconProps} from '@components'
import {AppBottomTabParamList} from '@routes'

interface ScreenName {
  label: string
  icon: {
    isFocused: IconProps['name']
    unFocused: IconProps['name']
  }
}

type TabScreenName = keyof AppBottomTabParamList

export const mapScreenName: Record<TabScreenName, ScreenName> = {
  HomeScreen: {
    label: 'Home',
    icon: {
      isFocused: 'HomeFill',
      unFocused: 'Home',
    },
  },
  FavoriteScreen: {
    label: 'Favoritos',
    icon: {
      isFocused: 'BookmarkFill',
      unFocused: 'Bookmark',
    },
  },
  MyProfileScreen: {
    label: 'Meu Perfil',
    icon: {
      isFocused: 'ProfileFill',
      unFocused: 'Profile',
    },
  },
  NewPostScreen: {
    label: 'Novo Post',
    icon: {
      isFocused: 'NewPost',
      unFocused: 'NewPost',
    },
  },
}
