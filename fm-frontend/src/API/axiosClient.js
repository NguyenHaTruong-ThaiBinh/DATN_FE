import axios from 'axios';
import Cookies from 'js-cookie';

// Tạo instance chính
const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/manager',
  withCredentials: false,
});

// Tạo instance riêng để refresh token, tránh interceptor lặp
const refreshAxios = axios.create({
  baseURL: 'http://localhost:8080/manager',
  withCredentials: false,
});

// Add interceptor cho request để gắn token
axiosClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add interceptor cho response
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    // Nếu là lỗi 401 và chưa thử refresh
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.warn('Token expired. Trying to refresh...');

      try {
        const expiredToken = Cookies.get('token');

        const res = await refreshAxios.post('/authentication/refresh', null, {
          params: { token: expiredToken },
        });

        const newToken = res.data.result.token;
        Cookies.set('token', newToken);

        // Gắn token mới vào request gốc
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return axiosClient(originalRequest);
      } catch (refreshError) {
        // Chuyển về trang login
        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
