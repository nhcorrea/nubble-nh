import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native'

interface TextProps extends RNTextProps {
  preset: TextVariants
  bold?: boolean
  italic?: boolean
  semiBold?: boolean
}

export const Text = ({
  children,
  preset,
  bold = false,
  italic = false,
  semiBold = false,
  style,
  ...rest
}: TextProps) => {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold)
  return (
    <RNText style={[$fontSizes[preset], { fontFamily }, style]} {...rest}>
      {children}
    </RNText>
  )
}

const getFontFamily = (
  preset: TextVariants,
  bold: boolean,
  italic: boolean,
  semiBold: boolean,
) => {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? $fontFamily.blackItalic : $fontFamily.black
  }
  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic
    case bold:
      return $fontFamily.bold
    case italic:
      return $fontFamily.italic
    case semiBold && italic:
      return $fontFamily.mediumItalic
    case semiBold:
      return $fontFamily.medium
    default:
      return $fontFamily.regular
  }
}

const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  regular: 'Satoshi-Regular',
  italic: 'Satoshi-Italic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall'

const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {
    fontSize: 32,
    lineHeight: 38.4,
  },
  headingMedium: {
    fontSize: 22,
    lineHeight: 26.4,
  },
  headingSmall: {
    fontSize: 18,
    lineHeight: 23.4,
  },
  paragraphLarge: {
    fontSize: 18,
    lineHeight: 25.2,
  },
  paragraphMedium: {
    fontSize: 16,
    lineHeight: 22.4,
  },
  paragraphSmall: {
    fontSize: 14,
    lineHeight: 19.6,
  },
  paragraphCaption: {
    fontSize: 12,
    lineHeight: 16.8,
  },
  paragraphCaptionSmall: {
    fontSize: 10,
    lineHeight: 14,
  },
}
