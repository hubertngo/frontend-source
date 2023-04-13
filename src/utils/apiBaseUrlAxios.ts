import axios from 'axios';
import flow from 'lodash/flow';
import ErrorResponseTransform from './interceptors/ErrorResponseTransform';
import UnauthorizedHandler from './interceptors/UnauthorizedHandler';
/**
 * Axios instance with specific baseURL setup
 * -------------------------------------------
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const apiBaseUrlAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

apiBaseUrlAxios.interceptors.response.use(flow([ErrorResponseTransform]), function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  flow([UnauthorizedHandler])(error);

  return Promise.reject(error);
});

export default apiBaseUrlAxios;
