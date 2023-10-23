import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  children: React.ReactNode
}

export function ScreenContainer({ children }: Props) {
  return <SafeAreaView style={styles.flex}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
})
