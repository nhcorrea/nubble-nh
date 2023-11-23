import {Controller, UseControllerProps, FieldValues} from 'react-hook-form'
import {TextInput} from '../TextInput/TextInput'
import {TextInputProps} from '../TextInput/TextInput'
import React from 'react'

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProp
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...textInputProp}
        />
      )}
    />
  )
}
