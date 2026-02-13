import axios from 'axios'

// 배포 환경(vercel 등)에서는 백엔드 URL 고정, 로컬에서는 env 또는 localhost
const DEFAULT_PRODUCTION_API = 'https://healthcare-backend-dotj.onrender.com/api'
const getDefaultBase = () => {
  if (typeof window !== 'undefined' && window.location?.hostname && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    return DEFAULT_PRODUCTION_API
  }
  return 'http://localhost:8080'
}

const RAW_API_BASE = import.meta.env.VITE_API_BASE_URL || getDefaultBase()

const ensureApiPath = (url) => {
  if (!url) return getDefaultBase().startsWith('http://localhost') ? 'http://localhost:8080/api' : DEFAULT_PRODUCTION_API
  const trimmed = url.replace(/\/+$/, '')
  if (trimmed.endsWith('/api')) {
    return trimmed
  }
  return `${trimmed}/api`
}

const API_BASE = ensureApiPath(RAW_API_BASE)

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 요청 인터셉터: 토큰 추가
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 응답 인터셉터: 에러 처리
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // 토큰 만료 또는 인증 실패
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
