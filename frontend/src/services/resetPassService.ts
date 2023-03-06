import instance from '../axios/axiosInstance'
import { useAuthStore } from '../store/auth'

export const resetPassService = async (data: { mail: string }) => {
  const token = useAuthStore.getState().token
  try {
    const response = await instance.post('/api/auth/forgetPassword', data, {
      headers: {
        token: `${token}`,
      },
    })
    return response
  } catch (error) {
    return error
  }
}
