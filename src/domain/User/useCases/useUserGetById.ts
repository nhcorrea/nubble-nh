import {useCallback, useEffect, useState} from 'react';

import {userService} from '../userService';
import {User} from '../userTypes';

export function useUserGetById(id: number) {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  const getUserById = useCallback(async () => {
    try {
      setIsLoading(true);
      const _user = await userService.getById(id);
      setUser(_user);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getUserById();
  }, [getUserById]);

  return {
    user,
    isLoading,
    error,
  };
}
