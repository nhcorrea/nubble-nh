import { ButtonContainerProps } from '.'
import { ThemeType } from '../../theme'

interface ButtonUI {
  container: ButtonContainerProps
  content: keyof ThemeType['colors']
}

export type ButtonPresets = 'filled' | 'outline'

export const buttonPresets: Record<
  ButtonPresets,
  {
    default: ButtonUI
    disabled: ButtonUI
  }
> = {
  filled: {
    default: {
      container: {
        backgroundColor: 'greenPrimary',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'greenPrimary',
      },
      content: 'greenPrimary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: 'gray2',
    },
  },
}
