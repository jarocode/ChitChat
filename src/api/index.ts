import axios from 'axios';

declare global {
  interface Window {
    configs: {
      baseURL: string;
    };
  }
}

const api = axios.create({
  // baseURL: window.configs?.baseURL,
  baseURL: 'http://localhost:8080/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('_tkk');

  if (!token) return config;

  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: { response: { status: number } }) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      return window.location.replace('/');
    }

    // console.log('axiosError', error?.response?.data?.message);

    return Promise.reject(error);
  }
);

export default api;
