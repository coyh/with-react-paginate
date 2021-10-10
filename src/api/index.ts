import axios, { AxiosResponse } from 'axios';
import { User } from '../entity/user.entity';

export const getUsers = (params?: Record<string, unknown>): Promise<AxiosResponse<User[]>> => {
  return axios.get('http://localhost:8888/users', {
    params: params,
  });
};
