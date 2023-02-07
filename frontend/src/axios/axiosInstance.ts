import axios from 'axios';
const BASE_URL = 'http://localhost:3000';

// URL Base. Cuando estén terminados los endpoints, se reemplazará la url. Cada vez que se use Axios,
// tomará como base la misma. Para utilizarlo, en vez de importar axios from 'axios', se importará desde esta ruta.

const instance = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});

export default instance;
