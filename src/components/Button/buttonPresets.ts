import {ThemeType} from '@theme';

import {TouchableOpacityBoxProps} from './Button';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: keyof ThemeType['colors'];
}

export type ButtonPresets = 'filled' | 'outline';

interface ButtonUIModel {
  default: ButtonUI;
  disabled: ButtonUI;
}

export const buttonPresets: Record<ButtonPresets, ButtonUIModel> = {
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
};
