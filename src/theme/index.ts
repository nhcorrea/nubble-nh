import { createTheme } from '@shopify/restyle'

const pallete = {
  grayBlack: '#000000',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  grayWhite: '#FFFFFF',

  greenPrimary: '#074C4E',
  greenSecondary: '#EAF6F6',
  orangePrimary: '#F86F2D',
  orangeSecondary: '#FAE6DD',
  greenSucessPrimary: '#4ABC86',
  greenSucessSecondary: '#D8FFEC',
  redErrorPrimary: '#EA3838',
  redErrorSecondary: '#FBECEC',
}

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
  },
  spacing: {
    s4: 4,
    s8: 8,
    s16: 16,
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
})

export type ThemeType = typeof theme
