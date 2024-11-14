import React, {PropsWithChildren} from 'react';

import {AuthCredentialsProvider} from '#/services/auth/Providers/AuthCredentialsProvider';

export function ContextStackProvider({children}: PropsWithChildren) {
  return <AuthCredentialsProvider>{children}</AuthCredentialsProvider>;
}
