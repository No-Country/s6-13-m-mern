import axios, { AxiosError } from 'axios'
import { RegisterData } from '../interfaces/authInterfaces'

const registerService = async (data: RegisterData) => {
  try {
    const resLogin = await axios.post('/api/user/register', data)
    return resLogin.data
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default registerService
