import {AuthCredentials} from '#/domain/Auth/authTypes';

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  saveAuthCrendentials: (authCredentials: AuthCredentials) => Promise<void>;
  removeAuthCredentials: () => Promise<void>;
  isLoading: boolean;
}
