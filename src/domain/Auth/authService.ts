import {toUser} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials, SignInParams, SignUpParams} from './authTypes';

async function signIn(params: SignInParams): Promise<AuthCredentials> {
  try {
    const {auth, user} = await authApi.signIn(params);

    return {
      token: auth.token,
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

export const authService = {
  signIn,
  signUp,
  signOut,
  updateToken,
  removeToken,
  isUsernameAvailable,
  isEmailAvailable,
};
