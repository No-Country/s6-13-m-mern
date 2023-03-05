import axios from '../axios/axiosInstance'
import { AxiosError } from 'axios'
import { EmailValues } from '../interfaces/emailInterfaces'
import { useAuthStore } from '../store/auth'

const emailService = async (data: EmailValues) => {
  const token = useAuthStore.getState().token
  try {
    const resContact = await axios.post('/api/sendEmail', data, {
      headers: {
        token: `${token}`,
      },
    })
    return resContact.data
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default emailService
