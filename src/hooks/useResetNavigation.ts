import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {AuthStackParamList} from '@routes';

export function useResetNavigation() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  function reset(params: AuthStackParamList['SuccessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  }

  return {reset};
}
