import axios from 'axios';
import { baseurl } from './constants/constants';

const instance = axios.create({
  baseURL: baseurl,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

instance.interceptors.request.use(authInterceptor);

export default instance;
