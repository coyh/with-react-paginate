import axios from 'axios';

export const getUsers = (params?: Record<string, unknown>) => {
  return axios.get('http://localhost:8888/users', { params });
};
