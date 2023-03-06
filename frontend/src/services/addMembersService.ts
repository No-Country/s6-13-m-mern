import axios from '../axios/axiosInstance'
import { AxiosError } from 'axios'
import { useAuthStore } from '../store/auth'

const addMembersService = async (consortiumId: string, userId: string) => {
  const token = useAuthStore.getState().token
  try {
    const resAdd = await axios.put(`/api/consortium/addUser/${consortiumId}/${userId}`, {
      headers: {
        token: `${token}`,
      },
    })
    return resAdd
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default addMembersService
