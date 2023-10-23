import { Box } from '../Box'
import { Text } from '../Text'
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from 'react-native'
import { useRef } from 'react'

import { fontFamily, typography } from '../../theme/typography'
import { useAppTheme } from '../../hooks/useAppTheme'

interface Props extends RNTextInputProps {
  label: 'Email' | 'Senha'
  errorMessage?: string
}

export function TextInput({ label, errorMessage, ...props }: Props) {
  const inputRef = useRef<RNTextInput>(null)
  const { colors } = useAppTheme()

  const focusInput = () => inputRef.current?.focus()

  return (
    <Pressable onPress={focusInput}>
      <Box gap="s4">
        <Text variant="paragraphMedium" color="backgroundContrast">
          {label}
        </Text>
        <Box
          padding="s16"
          borderColor={errorMessage ? 'redErrorPrimary' : 'gray4'}
          borderRadius="s12"
          borderWidth={errorMessage ? 2 : 1}>
          <RNTextInput
            ref={inputRef}
            keyboardType={label === 'Email' ? 'email-address' : 'default'}
            secureTextEntry={label === 'Senha'}
            placeholderTextColor={colors.gray2}
            style={{ color: colors.backgroundContrast, ...styles.textInput }}
            {...props}
          />
        </Box>
        {errorMessage ? (
          <Text variant="paragraphSmallBold" color="redErrorPrimary">
            {errorMessage}
          </Text>
        ) : null}
      </Box>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  textInput: {
    padding: 0,
    fontFamily: fontFamily.regular.fontFamily,
    fontSize: typography.paragraphMedium.fontSize,
    lineHeight: typography.paragraphMedium.lineHeight,
    fontWeight: '400',
  },
})
