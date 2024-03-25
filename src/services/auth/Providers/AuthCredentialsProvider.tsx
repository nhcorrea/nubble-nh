import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';

import {AuthCredentials, authService} from '@domain';

import {AuthCredentialsService} from '../';
import {authStorage} from '../authStorage';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: false,
  saveAuthCrendentials: async () => {},
  removeAuthCredentials: async () => {},
});

export function AuthCredentialsProvider({children}: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(false);
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);

  async function loadAuthCredentials() {
    try {
      setIsLoading(true);
      const _authCredentials = await authStorage.get();

      if (_authCredentials) {
        authService.updateToken(_authCredentials.token);
        setAuthCredentials(_authCredentials);
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }

  async function saveAuthCrendentials(_authCredentials: AuthCredentials) {
    authService.updateToken(_authCredentials.token);
    await authStorage.set(_authCredentials);
    setAuthCredentials(_authCredentials);
  }
  async function removeAuthCredentials() {
    authService.removeToken();
    await authStorage.remove();
    setAuthCredentials(null);
  }

  useEffect(() => {
    loadAuthCredentials();
  }, []);

  return (
    <AuthCredentialsContext.Provider
      value={{
        authCredentials,
        isLoading,
        saveAuthCrendentials,
        removeAuthCredentials,
      }}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
