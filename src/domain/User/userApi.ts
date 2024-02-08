import {api} from '@api';

import {UserAPI} from './userTypes';

export async function getById(id: number): Promise<UserAPI> {
  const {data} = await api.get<UserAPI>(`/users/${id}`);

  return data;
}

export const userApi = {
  getById,
};
