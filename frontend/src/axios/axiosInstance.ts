import axios from 'axios'

// URL Base. Cuando estén terminados los endpoints, se reemplazará la url. Cada vez que se use Axios,
// tomará como base la misma. Para utilizarlo, en vez de importar axios from 'axios', se importará desde esta ruta.

const instance = axios.create({
  baseURL: import.meta.env.VITE_LOCAL_BASE_URL,
  // withCredentials: true,
})

export default instance
