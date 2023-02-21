import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'
import { UserProfile } from '../interfaces/userInterfaces'

interface resp {
  data: { user: UserProfile }
}

const getUserByIdService = async (id: string) => {
  /*   const token = useAuthStore.getState().token
  const config = { headers: { token } } */
  try {
    const resLogin: resp = await axios.get(`/api/user/getUser/${id}`)
    return resLogin.data.user
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default getUserByIdService
