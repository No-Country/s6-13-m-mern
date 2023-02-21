import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'

const getUserByIdService = async (id: string) => {
  /*   const token = useAuthStore.getState().token
  const config = { headers: { token } } */
  try {
    const resLogin = await axios.get(`/api/user/getUser/${id}`)
    return resLogin.data
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default getUserByIdService
