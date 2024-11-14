import React from 'react';

import {Toast} from '#/components/Toast/Toast';
import {ContextStackProvider} from '#/providers/ContextStack';
import {StateStack} from '#/providers/StateStack';
import {UtilityStack} from '#/providers/UtilityStack';
import {Router} from '#/routes/Routes';
import {MMKVStorage} from '#/services/auth/MMKVStorage';
import {initializeStorage} from '#/services/auth/storage';

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
