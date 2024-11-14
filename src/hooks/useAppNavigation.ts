import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {AppStackParamList} from '#/routes/routesTypes';

export function useAppNavigation() {
  return useNavigation<NativeStackNavigationProp<AppStackParamList>>();
}
