import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {Box, Text, styles} from '@components';
import {useAppTheme} from '@hooks';

interface Props extends RNTextInputProps {
  onPressSend: () => void;
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
        <Pressable disabled={sendIsDisabled} onPress={onPressSend}>
          <Text color={sendIsDisabled ? 'gray2' : 'primary'}>Enviar</Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
