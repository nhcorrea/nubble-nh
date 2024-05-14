import React from 'react';

import {ContextStackProvider, StateStack, UtilityStack} from '@providers';
import {initializeStorage, MMKVStorage} from '@services';

import {Toast} from '@components';
import {Router} from '@routes';

initializeStorage(MMKVStorage);

export function App(): React.JSX.Element {
  return (
    <StateStack>
      <UtilityStack>
        <ContextStackProvider>
          <Router />
          <Toast />
        </ContextStackProvider>
      </UtilityStack>
    </StateStack>
  );
}
