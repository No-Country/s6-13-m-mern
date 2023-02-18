import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'

const getAllUsersService = async () => {
  try {
    const users = await axios.get('/api/user/getAllUsers')
    return users.data.users
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default getAllUsersService
