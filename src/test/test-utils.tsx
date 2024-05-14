import React, {PropsWithChildren, ReactElement} from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {RenderOptions, render} from '@testing-library/react-native';

import {theme} from '@theme';

export function AllProviders({children}: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export function customRender<T = undefined>(
  ui: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, {wrapper: AllProviders, ...options});
}

export * from '@testing-library/react-native';
export {customRender as render};
