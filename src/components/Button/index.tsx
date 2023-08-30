import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
  ActivityIndicator,
} from 'react-native'

import {
  createRestyleComponent,
  backgroundColor,
  opacity,
  spacing,
  layout,
  shadow,
  border,
  backgroundColorShorthand,
  spacingShorthand,
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  OpacityProps,
  SpacingProps,
  SpacingShorthandProps,
  LayoutProps,
  ShadowProps,
  BorderProps,
  useTheme,
} from '@shopify/restyle'
import { ThemeType } from '../../theme'
import { Text } from '../Text'

type RestyleProps = BackgroundColorProps<ThemeType> &
  BackgroundColorShorthandProps<ThemeType> &
  OpacityProps<ThemeType> &
  SpacingProps<ThemeType> &
  SpacingShorthandProps<ThemeType> &
  LayoutProps<ThemeType> &
  ShadowProps<ThemeType> &
  BorderProps<ThemeType>

type ButtonContainerProps = RNTouchableOpacityProps & RestyleProps

const ButtonContainer = createRestyleComponent<ButtonContainerProps, ThemeType>(
  [
    backgroundColor,
    backgroundColorShorthand,
    opacity,
    spacing,
    spacingShorthand,
    layout,
    shadow,
    border,
  ],
  TouchableOpacity,
)
interface ButtonProps {
  title: string
  loading?: boolean
}
export function Button({ title, loading }: ButtonProps) {
  const theme = useTheme<ThemeType>()
  return (
    <ButtonContainer
      backgroundColor="greenPrimary"
      height={50}
      borderRadius="s16"
      justifyContent="center"
      alignItems="center">
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.primaryContrast} />
      ) : (
        <Text style={{ color: '#fff' }} preset="paragraphMedium">
          {title}
        </Text>
      )}
    </ButtonContainer>
  )
}
