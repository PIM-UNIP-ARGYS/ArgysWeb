import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5296/api',
  timeout: 5000,
})

export default api