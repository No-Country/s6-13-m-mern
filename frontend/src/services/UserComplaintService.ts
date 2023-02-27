import axios from '../axios/axiosInstance'
import { AxiosError } from 'axios'

export interface Complaint {
  name: string
  apt?: string
  email?: string
  subject: string
  message: string
}

const UserComplaintService = async (data: Complaint) => {
  try {
    const resComplaint = await axios.post('/api/sendConstraint', data)
    return resComplaint.data
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default UserComplaintService
