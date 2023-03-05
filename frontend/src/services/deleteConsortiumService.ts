import axios from '../axios/axiosInstance'
import { useAuthStore } from '../store/auth'

export const deleteConsortiumService = async (consortiumId: string, userId: string) => {
  const token = useAuthStore.getState().token
  try {
    const res = await axios.delete(`api/consortium/delete/${consortiumId}/${userId}`, {
      headers: {
        token: `${token}`,
      },
    })
    return res
  } catch (err) {
    console.log(err)
  }
}
