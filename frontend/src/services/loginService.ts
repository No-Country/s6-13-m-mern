import axios from '../axios/axiosInstance'
import { AxiosError } from 'axios'
import { LoginValues } from '../interfaces/authInterfaces'

const loginService = async (data: LoginValues) => {
  try {
    const resLogin = await axios.post('/api/auth/login', data)
    return resLogin.data
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default loginService
