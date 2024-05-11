import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

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
} from '@shopify/restyle';

import {useAppTheme} from '@hooks';
import {ThemeType} from '@theme';

import {Text} from '../Text/Text';

import {ButtonPresets, buttonPresets} from './buttonPresets';

type RestyleProps = BackgroundColorProps<ThemeType> &
  BackgroundColorShorthandProps<ThemeType> &
  OpacityProps<ThemeType> &
  SpacingProps<ThemeType> &
  SpacingShorthandProps<ThemeType> &
  LayoutProps<ThemeType> &
  ShadowProps<ThemeType> &
  BorderProps<ThemeType>;

export type TouchableOpacityBoxProps = RNTouchableOpacityProps & RestyleProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  ThemeType
>(
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
);

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPresets;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset = 'filled',
  disabled,
  ...TouchableOpacityProps
}: ButtonProps) {
  const {colors} = useAppTheme();
  const ButtonUI = disabled
    ? buttonPresets[preset].disabled
    : buttonPresets[preset].default;

  return (
    <TouchableOpacityBox
      height={50}
      borderRadius="s16"
      justifyContent="center"
      alignItems="center"
      disabled={disabled || loading}
      {...ButtonUI.container}
      {...TouchableOpacityProps}>
      {loading ? (
        <ActivityIndicator
          testID="loading-indicator"
          size="large"
          color={colors[ButtonUI.content]}
        />
      ) : (
        <Text color={ButtonUI.content} variant="paragraphMediumBold">
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
