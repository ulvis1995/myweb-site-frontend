import axios from 'axios';
import { baseurl } from '../BlockData/constants';

const $host = axios.create({
  baseURL: baseurl,
});

const $authHost = axios.create({
  baseURL: baseurl,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
