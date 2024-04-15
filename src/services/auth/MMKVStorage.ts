import {MMKV} from 'react-native-mmkv';

import {SyncStorage} from './storage';

const mmkv = new MMKV();

export const MMKVStorage: SyncStorage = {
  getItem: key => {
    const item = mmkv.getString(key);

    return item ? JSON.parse(item) : null;
  },
  removeItem: key => mmkv.delete(key),
  setItem: (key, value) => mmkv.set(key, JSON.stringify(value)),
};
