import {create} from 'zustand';

import {AuthCredentialsService} from './authCredentialsType';

export function useAuthCredentials(): AuthCredentialsService {
  return useAuthCredentialsStore();
}

export const useAuthCredentialsStore = create<AuthCredentialsService>(set => ({
  authCredentials: null,
  isLoading: false,
  saveAuthCrendentials: async authCredentials => set({authCredentials}),
  removeAuthCredentials: async () => set({authCredentials: null}),
}));
