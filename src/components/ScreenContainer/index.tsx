import { Box } from '../Box'
import { useAppSafeArea } from '../../hooks/useAppSafeArea'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import { ScrollViewContainer, ViewContainer } from './Containers/Containers'
import { useAppTheme } from '../../hooks/useAppTheme'

interface Props {
  children: React.ReactNode
  canGoBack?: boolean
  scrollEnabled?: boolean
}

export function ScreenContainer({
  children,
  scrollEnabled = false,
  canGoBack = false,
}: Props) {
  const { bottom, top } = useAppSafeArea()
  const { colors } = useAppTheme()

  const Container = scrollEnabled ? ScrollViewContainer : ViewContainer
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.flex}>
      <Container backgroundColor={colors.background}>
        <Box
          style={{
            paddingTop: top,
            paddingBottom: bottom,
          }}
          flex={1}
          paddingHorizontal="s24"
          backgroundColor="background">
          {canGoBack ? (
            <Box flexDirection="row" gap="s8">
              <Icon name="Arrow" color="primary" />
              <Text variant="paragraphMedium">Voltar</Text>
            </Box>
          ) : null}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
})
