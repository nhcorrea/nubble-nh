import {AuthCredentials} from '@domain';

import {storage} from './storage';

const enum StorageKeys {
  AUTH_KEY = 'auth',
}

async function set(authCredentials: AuthCredentials) {
  const result = await storage.setItem(StorageKeys.AUTH_KEY, authCredentials);
  return result;
}

async function get(): Promise<AuthCredentials | null> {
  const result: AuthCredentials | null = await storage.getItem(
    StorageKeys.AUTH_KEY,
  );

  return result;
}

async function remove() {
  await storage.removeItem(StorageKeys.AUTH_KEY);
}

export const authStorage = {
  set,
  get,
  remove,
};
