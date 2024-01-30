import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.3.10:3333',
  headers: {
    Authorization:
      'Bearer MQ.u8WpIVoxxI-4TOMuoXpBBJ0-xG7tfmqyqCVFVo7kBVUmLLTmUyT6Is8STeld',
  },
});
