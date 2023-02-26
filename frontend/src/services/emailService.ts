import axios from '../axios/axiosInstance'
import { AxiosError } from 'axios'
import { EmailValues } from '../interfaces/emailInterfaces'

const emailService = async (data: EmailValues) => {
  try {
    const resContact = await axios.post('/api/sendEmail', data)
    return resContact.data
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default emailService
