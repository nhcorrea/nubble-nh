import {api} from '@api';
import {AxiosRequestConfig} from 'axios';

import {UserAPI} from '../User';

import {SignInParams, SignInAPI, SignUpParams, ValidateAPI} from './authTypes';

const REFRESH_TOKEN_URL = '/auth/refresh-token';

async function signIn(params: SignInParams): Promise<SignInAPI> {
  const response = await api.post<SignInAPI>('/auth/login', {...params});

  return response.data;
}

async function signUp(params: SignUpParams): Promise<UserAPI> {
  const response = await api.post<UserAPI>('/auth/register', {...params});

  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get<string>('/auth/profile/logout');

  return response.data;
}

async function validateUsername(username: string): Promise<ValidateAPI> {
  const response = await api.get<ValidateAPI>(
    `/validate-username?username=${username}`,
  );

  return response.data;
}

async function validateEmail(email: string): Promise<ValidateAPI> {
  const response = await api.get<ValidateAPI>(
    `/auth/validate-email?email=${email}`,
  );

  return response.data;
}

async function forgotPassword(email: string): Promise<{message: string}> {
  const response = await api.post<{message: string}>(
    '/auth/forgot-password',
    null,
    {
      params: {email},
    },
  );

  return response.data;
}

async function refreshToken(token: string): Promise<SignInAPI> {
  const response = await api.post<SignInAPI>(REFRESH_TOKEN_URL, {
    refreshToken: token,
  });

  return response.data;
}

function updateToken(token: string): void {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken(): void {
  api.defaults.headers.common.Authorization = null;
}

function isRefreshTokenRequest(request: AxiosRequestConfig) {
  const url = request.url;
  return REFRESH_TOKEN_URL === url;
}

export const authApi = {
  signIn,
  signUp,
  signOut,
  updateToken,
  removeToken,
  validateUsername,
  validateEmail,
  forgotPassword,
  refreshToken,
  isRefreshTokenRequest,
};
