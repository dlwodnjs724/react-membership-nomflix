import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api_key'] = 'ce5267e419a632bd9c0c45d25d815071';
  config.params['language'] = 'en-US';
  return config;
});

export default api;
