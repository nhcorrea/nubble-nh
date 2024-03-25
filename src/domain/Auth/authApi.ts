import {api} from '@api';

import {UserAPI} from '../User';

import {SignInParams, SignInAPI, SignUpParams} from './authTypes';

async function signIn(params: SignInParams): Promise<SignInAPI> {
  const response = await api.post<SignInAPI>('/login', {...params});

  return response.data;
}

async function signUp(params: SignUpParams): Promise<UserAPI> {
  const response = await api.post<UserAPI>('/register', {...params});

  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get<string>('/profile/logout');

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
  signUp,
  signOut,
  updateToken,
  removeToken,
};
