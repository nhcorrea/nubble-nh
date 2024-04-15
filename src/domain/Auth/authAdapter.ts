import {UserAuthAPI, UserAuth} from './authTypes';

export function toUser(user: UserAuthAPI): UserAuth {
  return {
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    fullName: user.full_name,
    isOnline: user.is_online,
    profileUrl: user.profile_url,
    username: user.username,
  };
}
