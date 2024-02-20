import {AuthStackParamList} from '@routes';

import {useAuthNavigation} from './useAuthNavigation';

export function useResetNavigation() {
  const navigation = useAuthNavigation();
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
