import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'

const getUserPaymentsService = async (id: string) => {
  try {
    const res = await axios.get(`/api/payment/getUserPayments/${id}`)
    return res.data.payments
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default getUserPaymentsService
