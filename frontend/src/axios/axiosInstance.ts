import axios from 'axios'
import { useAuthStore } from '../store/auth'

// URL Base. Cuando estén terminados los endpoints, se reemplazará la url. Cada vez que se use Axios,
// tomará como base la misma. Para utilizarlo, en vez de importar axios from 'axios', se importará desde esta ruta.

const instance = axios.create({
  baseURL: process.env.VITE_LOCAL_BASE_URL,
})

const token = useAuthStore.getState().token
instance.defaults.headers.common.token = token

export default instance
