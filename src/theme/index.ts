import {createTheme} from '@shopify/restyle';
import {ViewStyle} from 'react-native/types';

import {pallete} from './pallete';
import {fontFamily, typography} from './typography';

export const theme = createTheme({
  colors: {
    ...pallete,

    primary: pallete.greenPrimary,
    primaryContrast: pallete.grayWhite,

    background: pallete.grayWhite,
    backgroundContrast: pallete.grayBlack,

    error: pallete.redErrorPrimary,
    errorLight: pallete.redErrorSecondary,

    success: pallete.greenSucessPrimary,
    successLight: pallete.greenSucessSecondary,

    marked: pallete.orangePrimary,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s64: 56,
  },
  borderRadii: {
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
  },

  textVariants: {
    defaults: {},
    headingLarge: {
      ...typography.headingLarge,
      ...fontFamily.black,
    },
    headingMedium: {
      ...typography.headingMedium,
      ...fontFamily.black,
    },
    headingSmall: {
      ...typography.headingSmall,
      ...fontFamily.black,
    },
    paragraphLarge: {
      ...typography.paragraphLarge,
      ...fontFamily.regular,
    },
    paragraphMedium: {
      ...typography.paragraphMedium,
      ...fontFamily.regular,
    },
    paragraphSmall: {
      ...typography.paragraphSmall,
      ...fontFamily.regular,
    },
    paragraphCaption: {
      ...typography.paragraphCaption,
      ...fontFamily.regular,
    },
    paragraphCaptionMedium: {
      ...typography.paragraphCaption,
      ...fontFamily.medium,
    },
    paragraphCaptionSmall: {
      ...typography.paragraphCaptionSmall,
      ...fontFamily.regular,
    },
    paragraphLargeBold: {
      ...typography.paragraphLarge,
      ...fontFamily.bold,
    },
    paragraphMediumBold: {
      ...typography.paragraphMedium,
      ...fontFamily.bold,
    },
    paragraphSmallBold: {
      ...typography.paragraphSmall,
      ...fontFamily.bold,
    },
    paragraphCaptionBold: {
      ...typography.paragraphCaption,
      ...fontFamily.bold,
    },
    paragraphCaptionSmallBold: {
      ...typography.paragraphCaptionSmall,
      ...fontFamily.bold,
    },
  },
});

export const shadowProps: ViewStyle = {
  elevation: 7,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: -3,
  },
  shadowRadius: 12,
  shadowOpacity: 0.05,
};

export type ThemeType = typeof theme;
