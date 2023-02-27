import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'
import { useAuthStore } from '../store/auth'

const getConsortiumPaymentsService = async () => {
  try {
    const id = useAuthStore.getState().id
    const res = await axios.get(`/api/payment/getUserPayments/${id}`)
    return res.data.payments
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default getConsortiumPaymentsService
