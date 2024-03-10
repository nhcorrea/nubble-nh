import {AuthCredentials} from '@domain';

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  saveAuthCrendentials: (authCredentials: AuthCredentials) => Promise<void>;
  removeAuthCredentials: () => Promise<void>;
  isLoading: boolean;
}
