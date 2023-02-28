import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'
import { useAuthStore } from '../store/auth'

const getConsortiumPayments = async (id: string | undefined) => {
  const token = useAuthStore.getState().token

  try {
    if (!id) {
      console.log('id is null')
      return
    }
    const res = await axios.get(`/api/payment/consortiumPayments/${id}`, {
      headers: {
        token: `${token}`,
      },
    })
    return res.data.payments
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default getConsortiumPayments
