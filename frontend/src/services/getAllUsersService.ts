import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'
import { useAuthStore } from '../store/auth'

const getAllUsersService = async () => {
  const token = useAuthStore.getState().token
  try {
    const users = await axios.get('/api/user/getAllUsers', {
      headers: {
        token: `${token}`,
      },
    })
    return users.data.users
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default getAllUsersService
