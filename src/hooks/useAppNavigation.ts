import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {AppStackParamList} from '@routes';

export function useAppNavigation(): NativeStackNavigationProp<AppStackParamList> {
  return useNavigation<NativeStackNavigationProp<AppStackParamList>>();
}
