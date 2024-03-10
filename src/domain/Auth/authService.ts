import {toUser} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials, SignInParams} from './authTypes';

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

export const authService = {
  signIn,
  signOut,
  updateToken,
  removeToken,
};
