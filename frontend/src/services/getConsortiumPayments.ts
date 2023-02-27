import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'

const getConsortiumPayments = async (id: string | undefined) => {
  try {
    if (!id) {
      console.log('id is null')
      return
    }
    const res = await axios.get(`/api/payment/consortiumPayments/${id}`)
    return res.data.payments
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default getConsortiumPayments
