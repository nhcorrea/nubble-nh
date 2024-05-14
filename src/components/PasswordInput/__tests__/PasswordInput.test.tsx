import React from 'react';

import {fireEvent, render, screen} from '../../../test/test-utils';
import {IconProps} from '../../Icon/Icon';
import {PasswordInput} from '../PasswordInput';

describe('<PasswordInput />', () => {
  it('should render password input with secure entry', () => {
    const mockedOnChange = jest.fn();

    render(
      <PasswordInput
        value="123456"
        label="Password"
        placeholder="Password"
        onChangeText={mockedOnChange}
        secureTextEntry
      />,
    );

    const inputElement = screen.getByPlaceholderText(/password/i);
    fireEvent.changeText(inputElement, '123456');

    expect(inputElement.props.secureTextEntry).toBeTruthy();
  });

  it('should toggle secure text entry', () => {
    const mockedOnChange = jest.fn();

    render(
      <PasswordInput
        value="123456"
        label="Password"
        placeholder="Password"
        onChangeText={mockedOnChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(/password/i);

    const eyeOnIcon: IconProps['name'] = 'EyeOn';
    const eyeOnSecureEntry = screen.getByTestId(eyeOnIcon);

    expect(inputElement.props.secureTextEntry).toBeTruthy();
    expect(eyeOnSecureEntry).toBeTruthy();

    fireEvent.press(screen.getByTestId(eyeOnIcon));

    const eyeOffIcon: IconProps['name'] = 'EyeOff';
    const eyeOffIconElement = screen.getByTestId(eyeOffIcon);

    expect(eyeOffIconElement).toBeTruthy();
    expect(inputElement.props.secureTextEntry).toBeFalsy();
  });
});
