import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'
import { useAuthStore } from '../store/auth'

const getUserPaymentsService = async (id: string) => {
  const token = useAuthStore.getState().token
  try {
    const res = await axios.get(`/api/payment/getUserPayments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    return res.data.payments
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default getUserPaymentsService
