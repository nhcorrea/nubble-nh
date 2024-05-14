import {toUser} from './userAdapter';
import {userApi} from './userApi';
import {User} from './userTypes';

export async function getUserById(id: number): Promise<User> {
  const userAPI = await userApi.getUserById(id);

  return toUser(userAPI);
}

export const userService = {
  getUserById,
};
