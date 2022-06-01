import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL_DEV
});

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

axios.interceptors.response.use(function (response) {
   // Do something with response data
   console.log('error');
  return response;
}, function (error) {
  console.log('error');
  return Promise.reject(error);
});

export default axiosInstance;
