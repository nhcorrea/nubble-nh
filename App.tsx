import React from 'react';

import {Toast} from '#/components/Toast/Toast';
import {ContextStackProvider} from '#/providers/ContextStack';
import {StateStack} from '#/providers/StateStack';
import {UtilityStack} from '#/providers/UtilityStack';
import {Router} from '#/routes/Routes';
import {initializeStorage, MMKVStorage} from '#/services/auth';

initializeStorage(MMKVStorage);

export function App() {
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
