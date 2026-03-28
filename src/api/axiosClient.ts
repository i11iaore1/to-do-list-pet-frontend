import axios from "axios";
import { authStorageService } from "../services/authService";

const BASE_URL = "http://localhost:8080/api";
const AUTH_PREFIX = "Bearer";

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 5000,
});

axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = authStorageService.getToken();
    if (accessToken) {
      config.headers.Authorization = `${AUTH_PREFIX} ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// TODO прибрати export
export const refreshToken = async (): Promise<string> => {
  const response = await axiosClient.post("/refresh/");
  const newAccessToken = response.data.access_token;
  authStorageService.setToken(newAccessToken);
  return newAccessToken;
};

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // if unauthorized and haven't tried to refresh yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      // marks that refresh has been attempted
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshToken();
        originalRequest.headers.Authorization = `${AUTH_PREFIX} ${newAccessToken}`;
        return axiosClient(originalRequest);
      } catch (refreshError) {
        // failed to refresh
        await axiosClient.post("/logout/").catch(() => {});
        authStorageService.clearToken();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
