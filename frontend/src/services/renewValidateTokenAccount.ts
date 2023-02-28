import axios from '../axios/axiosInstance'
import { useAuthStore } from '../store/auth'

export const renewValidateTokenAccount = async (id: string) => {
  const token = useAuthStore.getState().token
  try {
    const resp = await axios.get(`/api/user/renewToken/${id}`, {
      headers: {
        token: `${token}`,
      },
    })
    return resp.data
  } catch (error) {
    console.log(error)

    return error
  }
}
