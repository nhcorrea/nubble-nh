import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {AuthStackParamList} from '@routes';

export function useAuthNavigation(): NativeStackNavigationProp<AuthStackParamList> {
  return useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
}
