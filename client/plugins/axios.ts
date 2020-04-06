import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient
