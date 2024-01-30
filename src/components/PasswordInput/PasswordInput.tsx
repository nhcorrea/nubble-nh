import {useState} from 'react';
import React from 'react';

import {Icon} from '../Icon/Icon';
import {TextInput, TextInputProps} from '../TextInput/TextInput';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput({...props}: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => setIsSecureTextEntry(prev => !prev);

  return (
    <TextInput
      {...props}
      secureTextEntry={isSecureTextEntry}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          name={isSecureTextEntry ? 'EyeOn' : 'EyeOff'}
          color="gray2"
        />
      }
    />
  );
}
