import {UserAPI} from './userTypes';

import {api} from '#/api/apiConfig';

export async function getUserById(id: number): Promise<UserAPI> {
  const {data} = await api.get<UserAPI>(`/users/${id}`);

  return data;
}

export const userApi = {
  getUserById,
};
