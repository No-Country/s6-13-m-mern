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
    return consortia.data.consortiumRetrieved
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default getConsortiumService
