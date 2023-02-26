import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'
import { PaymentData } from '../interfaces/paymentsInterfaces'
import { useAuthStore } from '../store/auth'

const createPaymentService = async (data: PaymentData) => {
  const id = useAuthStore.getState().id
  try {
    const resPayment = await axios.post(`/api/payment/createPayment/${id}`, data)
    return resPayment.data
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default createPaymentService
