import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';
import {styles} from '../TextInput/TextInput';

import {useAppTheme} from '#/hooks/useAppTheme';

interface Props extends RNTextInputProps {
  onPressSend: (message: string) => void;
  value: string;
  placeholder?: string;
}
export function TextMessage({
  onPressSend,
  value,
  placeholder = 'Adicione um comentário',
  ...inputProps
}: Props) {
  const inputRef = useRef<RNTextInput>(null);
  const {colors} = useAppTheme();

  function focusInput() {
    inputRef.current?.focus();
  }

  const sendIsDisabled = value?.trim().length === 0;

  return (
    <Pressable onPressIn={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        borderRadius="s12"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <RNTextInput
          placeholder={placeholder}
          placeholderTextColor={colors.gray1}
          style={[styles.textInput, {color: colors.gray1}]}
          ref={inputRef}
          value={value}
          {...inputProps}
        />
        <Pressable disabled={sendIsDisabled} onPress={() => onPressSend(value)}>
          <Text color={sendIsDisabled ? 'gray2' : 'primary'}>Enviar</Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
