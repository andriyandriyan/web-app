import { Method } from 'axios';
import { LoginData, Message, User } from '@/interfaces';
import http from './http';

const apiHandler = async <T>(method: Method, url: string, data?: any): Promise<T> => {
  try {
    const request = await http.request<T>({ method, url, data });
    return request.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

const api = {
  async login(data: LoginData) {
    await http.get('sanctum/csrf-cookie');
    return apiHandler<boolean>('POST', 'login', data);
  },
  showAccount() {
    return apiHandler<User>('GET', 'user');
  },
  async logout() {
    return apiHandler<Message>('GET', 'logout');
  },
};

export default api;
