import axios from "axios";
import Cookies from "js-cookie";

const baseURL = import.meta.env.VITE_API_URL || "http://10.1.1.243:3333";

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("patient_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
