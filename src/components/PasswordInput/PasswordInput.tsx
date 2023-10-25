import { useState } from 'react'
import { Icon } from '../Icon'
import { TextInput, TextInputProps } from '../TextInput'

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>

export function PasswordInput({ ...props }: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)

  const toggleSecureTextEntry = () => setIsSecureTextEntry(prev => !prev)

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
  )
}
