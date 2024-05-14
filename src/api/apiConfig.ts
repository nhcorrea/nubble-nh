import {AuthCredentials, authService} from '@domain';
import axios from 'axios';

interface RegisterInterceptorProps {
  authCredentials: AuthCredentials | null;
  saveAuthCrendentials: (authCredentials: AuthCredentials) => void;
  removeAuthCredentials: () => void;
}

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export function registerInterceptor({
  authCredentials,
  removeAuthCredentials,
  saveAuthCrendentials,
}: RegisterInterceptorProps) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async err => {
      const status = err.response?.status;
      const message = err.response?.data?.message;
      const failedRequest = err.config;

      const hasNotRefreshToken = !authCredentials?.refreshToken;
      const isRefreshTokenRequest = authService.isRefreshTokenRequest(
        err.config,
      );

      console.log({status, message});

      if (status === 401) {
        if (hasNotRefreshToken || isRefreshTokenRequest || failedRequest.sent) {
          removeAuthCredentials();
          return Promise.reject(err);
        }

        failedRequest.sent = true;

        const newAuthCredentials = await authService.authByRefreshToken(
          authCredentials?.refreshToken,
        );

        saveAuthCrendentials(newAuthCredentials);
        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

        return api(failedRequest);
      }
    },
  );

  const eject = () => api.interceptors.response.eject(interceptor);

  return eject;
}
