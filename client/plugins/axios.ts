import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://yoursite.com/api',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})
