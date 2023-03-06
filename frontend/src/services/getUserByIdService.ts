import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'
import { useAuthStore } from '../store/auth'

const getUserByIdService = async (id: string) => {
  const token = useAuthStore.getState().token
  const config = { headers: { token } }
  try {
    const resLogin = await axios.get(`/api/user/getUser/${id}`, config)
    return resLogin.data
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default getUserByIdService
