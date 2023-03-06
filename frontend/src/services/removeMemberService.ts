import axios from '../axios/axiosInstance'
import { AxiosError } from 'axios'
import { useAuthStore } from '../store/auth'

const removeMembersService = async (consortiumId: string, userId: string) => {
  const token = useAuthStore.getState().token
  try {
    await axios.put(`/api/consortium/removeUser/${consortiumId}/${userId}`, {
      headers: {
        token: `${token}`,
      },
    })
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default removeMembersService
