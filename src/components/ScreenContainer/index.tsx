import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  children: React.ReactNode
}

export function ScreenContainer({ children }: Props) {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
}
