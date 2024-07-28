import Axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import { BASE_API_URL, checkAccessToken, disableAccessToken } from '@/utils';

const axios = Axios.create({
  baseURL: BASE_API_URL,
});

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== 'undefined') {
      const accessToken = checkAccessToken(); // Retrieve the actual access token here
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

const responseData = (response: AxiosResponse) => response.data;

const handleError = (error: AxiosError) => {
  const status = error.response && error.response.status;
  if (status === 401 || status === 403) {
    disableAccessToken();
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  }
  throw error;
};

class CoreAPIService {
  async get<T>(url: string, params: Record<string, any> = {}): Promise<T> {
    return axios.get(url, { params }).then(responseData).catch(handleError);
  }

  async post<T>(
    url: string,
    data: Record<string, any> = {},
    config: AxiosRequestConfig = {},
  ): Promise<T> {
    return axios.post(url, data, config).then(responseData).catch(handleError);
  }

  async put<T>(url: string, data: Record<string, any> = {}): Promise<T> {
    return axios.put(url, data).then(responseData).catch(handleError);
  }

  async patch<T>(url: string, data: Record<string, any> = {}): Promise<T> {
    return axios.patch(url, data).then(responseData).catch(handleError);
  }

  async delete<T>(url: string, data: Record<string, any> = {}): Promise<T> {
    return axios.delete(url, { data }).then(responseData).catch(handleError);
  }
}

export default CoreAPIService;
