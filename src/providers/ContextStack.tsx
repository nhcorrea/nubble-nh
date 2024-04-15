import React, {PropsWithChildren} from 'react';

import {AuthCredentialsProvider} from '@services';
export function ContextStackProvider({children}: PropsWithChildren) {
  return <AuthCredentialsProvider>{children}</AuthCredentialsProvider>;
}
