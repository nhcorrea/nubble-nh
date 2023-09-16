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
import { ButtonPresets, buttonPresets } from './buttonPresets'

type RestyleProps = BackgroundColorProps<ThemeType> &
  BackgroundColorShorthandProps<ThemeType> &
  OpacityProps<ThemeType> &
  SpacingProps<ThemeType> &
  SpacingShorthandProps<ThemeType> &
  LayoutProps<ThemeType> &
  ShadowProps<ThemeType> &
  BorderProps<ThemeType>

export type ButtonContainerProps = RNTouchableOpacityProps & RestyleProps

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

interface ButtonProps extends ButtonContainerProps {
  title: string
  loading?: boolean
  preset?: ButtonPresets
  disabled?: boolean
}
export function Button({
  title,
  loading,
  preset = 'filled',
  disabled,
  ...ButtonContainerProps
}: ButtonProps) {
  const { colors } = useTheme<ThemeType>()
  const ButtonUI = disabled
    ? buttonPresets[preset].disabled
    : buttonPresets[preset].default

  return (
    <ButtonContainer
      disabled={disabled || loading}
      {...ButtonUI.container}
      height={50}
      borderRadius="s16"
      justifyContent="center"
      alignItems="center"
      {...ButtonContainerProps}>
      {loading ? (
        <ActivityIndicator size="large" color={colors[ButtonUI.content]} />
      ) : (
        <Text color={ButtonUI.content} variant="paragraphMediumBold">
          {title}
        </Text>
      )}
    </ButtonContainer>
  )
}
