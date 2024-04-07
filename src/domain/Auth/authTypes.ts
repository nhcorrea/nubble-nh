export interface SignInAPI {
  auth: AuthAPI;
  user: UserAuthAPI;
}

interface AuthAPI {
  type: string;
  token: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface SignUpAPI {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface SignUpParams {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface UserAuthAPI {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  temp_token: string | null;
  remember_me_token: string | null;
  profile_url: string;
  is_online: boolean;
  temp_token_created_at: string | null;
  remember_me_token_created_at: string | null;
  full_name: string;
}

export interface UserAuth {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  profileUrl: string;
  isOnline: boolean;
  fullName: string;
}

export interface ValidateAPI {
  message: string;
  isAvailable: boolean;
}

export interface AuthCredentials {
  token: string;
  user: UserAuth;
}
