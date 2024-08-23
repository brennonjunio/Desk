import axios from "axios";
import { env } from "./env";


const api = axios.create({
	baseURL: env.VITE_API_URL,
});

api.interceptors.request.use(
	async (config) => {
    try {
      const token = await localStorage.getItem('Authorization')
      if (token) {
        config.headers.Authorization = '${ token }'
      }
      return config
    } catch (error) {
      return Promise.reject(error)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error.response ? error.response.data : error)
  }
)

export { api }