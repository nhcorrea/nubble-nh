import {useTheme} from '@shopify/restyle'
import {ThemeType} from '../theme'

export const useAppTheme = () => useTheme<ThemeType>()
