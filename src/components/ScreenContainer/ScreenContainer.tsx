import {Box} from '../Box/Box'
import {useAppSafeArea} from '../../hooks/useAppSafeArea'
import {Icon} from '../Icon/Icon'
import {Text} from '../Text/Text'
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native'
import {ScrollViewContainer, ViewContainer} from './Containers/Containers'
import {useAppTheme} from '../../hooks/useAppTheme'
import {useNavigation} from '@react-navigation/native'
import {ButtonContainer} from '../Button/Button'
import React from 'react'

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
  const {bottom, top} = useAppSafeArea()
  const {colors} = useAppTheme()
  const navigation = useNavigation()
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
            <ButtonContainer
              onPress={navigation.goBack}
              flexDirection="row"
              gap="s8">
              <Icon name="Arrow" color="primary" />
              <Text variant="paragraphMedium">Voltar</Text>
            </ButtonContainer>
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
