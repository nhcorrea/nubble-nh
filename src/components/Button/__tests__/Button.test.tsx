import React from 'react';
import {StyleSheet} from 'react-native';

import {theme} from '@theme';

import {render, fireEvent, screen} from '../../../test/test-utils';
import {Button, ButtonProps} from '../Button';

function renderComponent(props: ButtonProps) {
  return render(<Button {...props} />);
}

const defaultProps: ButtonProps = {
  title: 'Teste teste',
};

describe('<Button />', () => {
  it('calls the onPress function', () => {
    const mockedOnPress = jest.fn();

    renderComponent({
      ...defaultProps,
      preset: 'filled',
      onPress: mockedOnPress,
    });

    const titleElement = screen.getByText(/teste teste/i);

    fireEvent.press(titleElement);

    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('does not call onPress function when it is disabled', () => {
    const mockedOnPress = jest.fn();

    renderComponent({
      ...defaultProps,
      onPress: mockedOnPress,
      disabled: true,
    });

    const titleElement = screen.getByText(/teste teste/i);

    fireEvent.press(titleElement);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  it('should turn title gray when button is disabled', () => {
    renderComponent({
      ...defaultProps,
      preset: 'outline',
      disabled: true,
    });

    const titleElement = screen.getByText(/teste teste/i);

    const style = StyleSheet.flatten(titleElement.props.style);

    expect(style.color).toEqual(theme.colors.gray2);
  });

  it('should render a button with loading indicator', () => {
    renderComponent({
      title: 'Teste teste',
      preset: 'outline',
      loading: true,
    });

    const loadingIndicator = screen.getByTestId('loading-indicator');

    expect(loadingIndicator).toBeTruthy();
  });
});
