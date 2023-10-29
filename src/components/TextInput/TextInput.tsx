import {Box} from '../Box/Box'
import {Text} from '../Text/Text'
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from 'react-native'
import {useRef} from 'react'

import {fontFamily, typography} from '../../theme/typography'
import {useAppTheme} from '../../hooks/useAppTheme'
import {BoxProps} from '@shopify/restyle'
import {ThemeType} from '../../theme'

export interface TextInputProps extends RNTextInputProps {
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
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null)
  const {colors} = useAppTheme()

  const focusInput = () => inputRef.current?.focus()

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
              placeholderTextColor={colors.gray2}
              style={{
                color: colors.backgroundContrast,
                ...styles.textInput,
              }}
              {...props}
            />
            {RightComponent}
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
