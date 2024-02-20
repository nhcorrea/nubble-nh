import {toUser} from './userAdapter';
import {userApi} from './userApi';
import {User} from './userTypes';

export async function getById(id: number): Promise<User> {
  const userAPI = await userApi.getById(id);
  return toUser(userAPI);
}

export const userService = {
  getById,
};
