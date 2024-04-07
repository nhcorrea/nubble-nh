import {api} from '@api';

import {UserAPI} from '../User';

import {SignInParams, SignInAPI, SignUpParams, ValidateAPI} from './authTypes';

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

async function validateUsername(username: string): Promise<ValidateAPI> {
  const response = await api.get<ValidateAPI>(
    `/validate-username?username=${username}`,
  );

  return response.data;
}

async function validateEmail(email: string): Promise<ValidateAPI> {
  const response = await api.get<ValidateAPI>(`/validate-email?email=${email}`);

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
  validateUsername,
  validateEmail,
};
