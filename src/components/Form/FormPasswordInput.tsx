import {Controller, FieldValues, UseControllerProps} from 'react-hook-form'
import {PasswordInput, PasswordInputProps} from '../PasswordInput/PasswordInput'
import React from 'react'

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  rules,
  name,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <PasswordInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...passwordInputProps}
        />
      )}
    />
  )
}
