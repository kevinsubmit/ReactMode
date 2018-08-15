import axios from 'axios';
const request = axios.create({
  baseURL: window.baseURL,
  // 以下解决跨域
  proxy: {
    host: '127.0.0.1',
    port: 3000
  },
});
request.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  });
// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  });

export default request