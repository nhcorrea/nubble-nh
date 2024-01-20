import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.3.10:3333',
  headers: {
    Authorization:
      'Bearer Mw.MMGJmD0kROnRhWAjfOqwYYvLy4GMmm0zfGmfMQWTzazj5R_y6ydB6OGYUlcv',
  },
});
