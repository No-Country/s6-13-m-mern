import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'
import { useAuthStore } from '../store/auth'

const getConsortiumService = async (id: string) => {
  const token = useAuthStore.getState().token
  try {
    const consortia = await axios.get(`/api/consortium/get/${id}`, {
      headers: {
        token: `${token}`,
      },
    })
    return consortia.data.consortium
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default getConsortiumService
