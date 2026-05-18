import axios from "axios";

// Create axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Request interceptor
API.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem("token");

    // Attach token to headers
    if (token) {
      config.headers.Authorization = `Bearer ${ token } `;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default API;
