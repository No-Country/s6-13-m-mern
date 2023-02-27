import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'

const getConsortiumPaymentsService = async (id: string) => {
  try {
    console.log('ID: ---- ', id)
    const res = await axios.get(`/api/payment/getUserPayments/${id}`)
    return res.data.payments
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default getConsortiumPaymentsService
