import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL_DEV
});

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default axiosInstance;