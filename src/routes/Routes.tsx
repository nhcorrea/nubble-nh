import React from 'react'

import {AppStack} from './AppStack'
import {AuthStack} from './AuthStack'

export function Router() {
  const authenticated = true
  return authenticated ? <AppStack /> : <AuthStack />
}
