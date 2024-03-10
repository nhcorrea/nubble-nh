import {api} from '@api';

import {SignInParams, SignInAPI} from './authTypes';

async function signIn(params: SignInParams): Promise<SignInAPI> {
  const response = await api.post<SignInAPI>('/login', {...params});

  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.post<string>('/logout');

  return response.data;
}

function updateToken(token: string): void {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken(): void {
  api.defaults.headers.common.Authorization = null;
}

export const authApi = {
  signIn,
  signOut,
  updateToken,
  removeToken,
};
