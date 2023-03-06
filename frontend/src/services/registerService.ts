import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'
import { RegisterData } from '../interfaces/authInterfaces'

const registerService = async (data: RegisterData) => {
  try {
    const resLogin = await axios.post('/api/user/register', data)
    return resLogin.data
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default registerService
