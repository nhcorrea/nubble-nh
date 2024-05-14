import {toUser} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials, SignInParams, SignUpParams} from './authTypes';

async function signIn(params: SignInParams): Promise<AuthCredentials> {
  try {
    const {auth, user} = await authApi.signIn(params);

    return {
      token: auth.token,
      tokenExpiresAt: auth.expires_at,
      refreshToken: auth.refreshToken,
      user: toUser(user),
    };
  } catch (err) {
    throw new Error('Error SignIn');
  }
}

async function signUp(params: SignUpParams): Promise<void> {
  await authApi.signUp(params);
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut();

  return message;
}

function updateToken(token: string): void {
  authApi.updateToken(token);
}

function removeToken(): void {
  authApi.removeToken();
}

async function isUsernameAvailable(username: string): Promise<boolean> {
  const {isAvailable} = await authApi.validateUsername(username);

  return isAvailable;
}

async function isEmailAvailable(email: string): Promise<boolean> {
  const {isAvailable} = await authApi.validateEmail(email);

  return isAvailable;
}

async function requestNewPassword(email: string): Promise<string> {
  const {message} = await authApi.forgotPassword(email);

  return message;
}

async function authByRefreshToken(
  refreshToken: string,
): Promise<AuthCredentials> {
  const {auth, user} = await authApi.refreshToken(refreshToken);

  return {
    token: auth.token,
    tokenExpiresAt: auth.expires_at,
    refreshToken: auth.refreshToken,
    user: toUser(user),
  };
}

export const authService = {
  signIn,
  signUp,
  signOut,
  updateToken,
  removeToken,
  isUsernameAvailable,
  isEmailAvailable,
  requestNewPassword,
  authByRefreshToken,
  isRefreshTokenRequest: authApi.isRefreshTokenRequest,
};
