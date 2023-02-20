import axios from '../axios/axiosInstance'
import { AxiosError } from 'axios'
import { EmailValues } from '../interfaces/emailIntefaces'

const emailService = async (data: EmailValues) => {
  try {
    const resContact = await axios.post('/api/sendEmail', data)
    return resContact.data
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default emailService
