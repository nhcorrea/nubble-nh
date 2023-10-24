import { Box } from '../Box'
import { Text } from '../Text'
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { useRef, useState } from 'react'

import { fontFamily, typography } from '../../theme/typography'
import { useAppTheme } from '../../hooks/useAppTheme'
import { BoxProps } from '@shopify/restyle'
import { ThemeType } from '../../theme'

interface Props extends RNTextInputProps {
  label: 'Email' | 'Senha' | string
  errorMessage?: string
  RightComponent?: JSX.Element
  boxProps?: BoxProps<ThemeType>
}

export function TextInput({
  label,
  errorMessage,
  RightComponent,
  boxProps,
  ...props
}: Props) {
  const [isSecure, seIsSecure] = useState(true)
  const inputRef = useRef<RNTextInput>(null)
  const { colors } = useAppTheme()

  const focusInput = () => inputRef.current?.focus()
  const handleSecureTextEntry = () => seIsSecure(prev => !prev)

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Box gap="s4">
          <Text variant="paragraphMedium" color="backgroundContrast">
            {label}
          </Text>
          <Box
            flexDirection="row"
            padding="s16"
            borderColor={errorMessage ? 'redErrorPrimary' : 'gray4'}
            borderRadius="s12"
            borderWidth={errorMessage ? 2 : 1}>
            <RNTextInput
              ref={inputRef}
              keyboardType={label === 'Email' ? 'email-address' : 'default'}
              secureTextEntry={label === 'Senha' && isSecure}
              placeholderTextColor={colors.gray2}
              style={{
                color: colors.backgroundContrast,
                ...styles.textInput,
              }}
              {...props}
            />
            <TouchableOpacity onPress={handleSecureTextEntry}>
              {RightComponent}
            </TouchableOpacity>
          </Box>
          {errorMessage ? (
            <Text variant="paragraphSmallBold" color="redErrorPrimary">
              {errorMessage}
            </Text>
          ) : null}
        </Box>
      </Pressable>
    </Box>
  )
}

const styles = StyleSheet.create({
  textInput: {
    padding: 0,
    fontFamily: fontFamily.regular.fontFamily,
    fontSize: typography.paragraphMedium.fontSize,
    lineHeight: typography.paragraphMedium.lineHeight,
    fontWeight: '400',
    flex: 1,
  },
})
