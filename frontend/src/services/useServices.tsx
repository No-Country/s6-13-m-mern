import axios from 'axios'

interface DataLogin {
  email: string
  password: string
}

interface Dataregister {
  email: string
  password: string
  name: string
  lastname: string
}

const useServices = () => {
  const baseURL: string = import.meta.env.VITE_BASE_URL
    ? import.meta.env.VITE_BASE_URL
    : import.meta.env.VITE_LOCAL_BASE_URL

  const routeUrl = {
    auth: baseURL + '/api/auth',
    user: baseURL + '/api/user',
  }

  // For public  routes
  const api = () => {
    return axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  // For protected routes
  /* const apiProtected = () => {
    return axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${getToken()}`,
      },
      withCredentials: true,
    })
  } */

  // AUTH API CALLS
  const auth = {
    signup: async (data: Dataregister) => await api().post(`${routeUrl.user}/register`, data),
    login: async (data: DataLogin) => await api().post(`${routeUrl.auth}/login`, data),
  }

  return { auth }
}

export default useServices
